// Image pipeline: `npm run images`
//
// For every JPEG/PNG under public/ (except the folders in SKIP_DIRS) it:
//   1. The first time it sees an image, shrinks the original in place to at most MAX_EDGE px
//      on the long side and re-encodes it (mozjpeg / max-compression PNG), but only if that
//      makes the file smaller. This file stays the <img> fallback for non-AVIF browsers.
//   2. Writes AVIF variants to public/optimized/<path>-<width>.avif.
//   3. Records size, widths and a placeholder color in src/generated/images.json,
//      which <ResponsiveImage> reads to build <picture> sources.
//
// Re-running is cheap: images whose hash matches the manifest and whose variants exist
// are skipped. Pass --force to rebuild everything.
//
// The full-resolution originals remain in git history (before the Phase 2 commit).

import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const MANIFEST = path.join(ROOT, 'src', 'generated', 'images.json');

const SKIP_DIRS = new Set(['optimized', 'fonts']);
// Served as-is: browser icons, the logo (small PNG with alpha) and the social share image
const SKIP_FILES = new Set(['logo.png', 'favicon-48.png', 'apple-touch-icon.png', 'og-default.jpg']);
const MAX_EDGE = 1920;
const AVIF = { quality: 50, effort: 4 };
const JPEG = { quality: 80, mozjpeg: true };

// Hero-sized images at the public root get a 1920 variant; content images stop at 1280 and
// add a 320 variant for thumbnails (news list rows, coach cards). 960 covers full-width
// images on typical phones (≈410 CSS px at 2–2.6× density).
const widthsFor = (rel) => (rel.includes('/') ? [320, 640, 960, 1280] : [640, 960, 1280, 1920]);
const plannedWidths = (rel, width) => {
  const w = widthsFor(rel).filter((x) => x <= width);
  return w.length ? w : [width];
};

const force = process.argv.includes('--force');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(e.name) && !SKIP_FILES.has(e.name)) {
      files.push(full);
    }
  }
  return files;
}

const hash = (buf) => crypto.createHash('sha1').update(buf).digest('hex').slice(0, 12);
const exists = (p) => fs.access(p).then(() => true, () => false);
const toHex = ({ r, g, b }) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');

async function shrinkOriginal(file, buf) {
  const img = sharp(buf, { failOn: 'none' }).rotate();
  const meta = await img.metadata();
  const isPng = meta.format === 'png';
  const resized = img.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });
  const out = isPng
    ? await resized.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer()
    : await resized.jpeg(JPEG).toBuffer();
  if (out.length < buf.length) {
    await fs.writeFile(file, out);
    return out;
  }
  return buf;
}

async function main() {
  const manifest = force ? {} : JSON.parse(await fs.readFile(MANIFEST, 'utf8').catch(() => '{}'));
  const next = {};
  const files = (await walk(PUBLIC)).sort();
  let processed = 0;
  let saved = 0;

  for (const file of files) {
    const rel = path.relative(PUBLIC, file).split(path.sep).join('/');
    const key = '/' + rel;
    let buf = await fs.readFile(file);
    const prev = manifest[key];
    const base = '/optimized/' + rel.replace(/\.[^.]+$/, '');

    if (prev && prev.hash === hash(buf) && plannedWidths(rel, prev.width).join() === prev.widths.join()) {
      const allThere = await Promise.all(prev.widths.map((w) => exists(path.join(PUBLIC, `${base}-${w}.avif`))));
      if (allThere.every(Boolean)) {
        next[key] = prev;
        continue;
      }
    }

    // Shrink each original only once (when it first appears): re-encoding an already
    // processed JPEG on every run would slowly degrade it.
    if (!prev) {
      const before = buf.length;
      buf = await shrinkOriginal(file, buf);
      saved += before - buf.length;
    }

    const meta = await sharp(buf).metadata();
    const widths = plannedWidths(rel, meta.width);

    await fs.mkdir(path.dirname(path.join(PUBLIC, base)), { recursive: true });
    for (const w of widths) {
      await sharp(buf).resize({ width: w, withoutEnlargement: true }).avif(AVIF).toFile(path.join(PUBLIC, `${base}-${w}.avif`));
    }

    const { dominant } = await sharp(buf).stats();
    next[key] = {
      width: meta.width,
      height: meta.height,
      widths,
      base,
      placeholder: toHex(dominant),
      hash: hash(buf),
    };
    processed++;
    process.stdout.write(`✓ ${key} ${meta.width}×${meta.height} → ${widths.join('/')}\n`);
  }

  // Drop variants whose source image no longer exists
  for (const key of Object.keys(manifest)) {
    if (next[key]) continue;
    for (const w of manifest[key].widths) {
      await fs.rm(path.join(PUBLIC, `${manifest[key].base}-${w}.avif`), { force: true });
    }
  }

  const sorted = Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`\n${processed} processed, ${files.length - processed} unchanged, originals shrunk by ${(saved / 1024 / 1024).toFixed(1)} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
