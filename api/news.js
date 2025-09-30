// api/news.js  (Vercel Node function)
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_NEWS_TABLE = process.env.AIRTABLE_NEWS_TABLE || "News";
const ADMIN_KEY = process.env.ADMIN_KEY;

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
  AIRTABLE_NEWS_TABLE
)}`;

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-key");
}

async function airtableGet(params) {
  const url = new URL(AIRTABLE_URL);
  Object.entries(params || {}).forEach(([k, v]) => url.searchParams.append(k, v));
  const r = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
  });
  if (!r.ok) throw new Error(`Airtable GET ${r.status}`);
  return r.json();
}

async function airtableCreate(fields) {
  const r = await fetch(AIRTABLE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ records: [{ fields }] }),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || `Airtable POST ${r.status}`);
  return data;
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return res.status(500).json({ error: "Missing Airtable env vars" });
    }

    if (req.method === "GET") {
      const { slug, limit = 50 } = req.query || {};

      if (slug) {
        const filter = `slug="${slug}"`;
        const data = await airtableGet({ filterByFormula: filter, maxRecords: 1 });
        const rec = data.records?.[0];
        if (!rec) return res.status(404).json({ error: "Not found" });
        const f = rec.fields;
        return res.json({
          title: f.title,
          slug: f.slug,
          date: f.date,
          summary: f.summary || "",
          content: f.content || "",
          images: f.images?.map((x) => x.url) ||
            (f.imageUrls ? String(f.imageUrls).split(",").map((s) => s.trim()) : []),
        });
      }

      // List
      const data = await airtableGet({
        pageSize: Math.min(Number(limit) || 50, 100),
        sort: JSON.stringify([{ field: "date", direction: "desc" }]),
      });

      const items = (data.records || []).map((r) => {
        const f = r.fields;
        const firstImg =
          (f.images && f.images[0]?.url) ||
          (f.imageUrls ? String(f.imageUrls).split(",")[0]?.trim() : "");
        return {
          title: f.title,
          slug: f.slug,
          date: f.date,
          summary: f.summary || "",
          image: firstImg || "",
          link: `/naujienos/${f.slug}`,
        };
      });
      return res.json(items);
    }

    if (req.method === "POST") {
      if (req.headers["x-admin-key"] !== ADMIN_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const body =
        typeof req.body === "object" && req.body
          ? req.body
          : JSON.parse(await new Promise((resolve) => {
              let raw = "";
              req.on("data", (c) => (raw += c));
              req.on("end", () => resolve(raw || "{}"));
            }));

      const { title, slug, date, summary = "", content = "", imageUrls = [] } = body;
      if (!title || !slug || !date) {
        return res.status(400).json({ error: "Missing title/slug/date" });
      }

      const fields = { title, slug, date, summary, content };
      if (Array.isArray(imageUrls) && imageUrls.length) {
        fields.imageUrls = imageUrls.join(", ");
      }

      const data = await airtableCreate(fields);
      return res.status(201).json({ ok: true, id: data.records?.[0]?.id });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error", details: String(e?.message || e) });
  }
}
