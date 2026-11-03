// Vercel Serverless Function — Resend HTTP + CORS + JSON
function setCors(res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

const clip = (v, max = 2000) => String(v ?? "").trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function emailLayout(title, rows, message) {
  const rowsHtml = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0"><b>${escapeHtml(v)}</b></td></tr>`)
    .join("");
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
    <h2>${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse">${rowsHtml}</table>
    ${message ? `<hr/><p style="white-space:pre-wrap">${escapeHtml(message)}</p>` : ""}
  </div>`.trim();
}

// General contact form (/kontaktai)
function buildContact(b) {
  const name = clip(b.name, 200), email = clip(b.email, 200), phone = clip(b.phone, 50);
  const message = clip(b.message, 5000), preferredContact = clip(b.preferredContact, 100);
  if (!message || (!email && !phone)) {
    return { error: "Reikia žinutės ir bent el. pašto arba telefono" };
  }
  return {
    subject: "Nauja žinutė iš FA Kaunas svetainės",
    html: emailLayout("Nauja užklausa iš svetainės", [
      ["Vardas", name], ["El. paštas", email], ["Telefonas", phone], ["Pageidaujamas kontaktavimas", preferredContact],
    ], message),
    replyTo: isEmail(email) ? email : null,
  };
}

// Trial training registration (/registracija)
function buildTrial(b) {
  const childName = clip(b.childName, 200), birthYear = clip(b.birthYear, 20), group = clip(b.group, 50);
  const parentName = clip(b.parentName, 200), phone = clip(b.phone, 50), email = clip(b.email, 200);
  const message = clip(b.message, 5000);
  if (!childName || !birthYear || !parentName || phone.replace(/\D/g, "").length < 8 || b.consent !== true) {
    return { error: "Trūksta privalomų laukų" };
  }
  if (email && !isEmail(email)) return { error: "Neteisingas el. pašto adresas" };
  return {
    subject: `Registracija į treniruotę: ${childName} (${birthYear})`,
    html: emailLayout("Registracija į bandomąją treniruotę", [
      ["Vaikas", childName], ["Gimimo metai", birthYear], ["Grupė", group],
      ["Tėvai / globėjai", parentName], ["Telefonas", phone], ["El. paštas", email],
      ["Sutikimas", "Sutiko su duomenų tvarkymu (privatumo politika)"],
    ], message),
    replyTo: email || null,
  };
}

async function readJson(req) {
  const ct = String(req.headers["content-type"] || "").toLowerCase();
  if (!ct.includes("application/json")) return {};
  const chunks = [];
  for await (const ch of req) chunks.push(ch);
  try { return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"); } catch { return {}; }
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Only POST is allowed" });

  const RESEND_KEY =
    process.env.RESEND_API_KEY ||               // teisingas pavadinimas
    process.env.RESEND_APT_KEY ||               // fallback, jei per klaidą įvesta su T
    "";

  if (!RESEND_KEY) {
    return res.status(500).json({ ok:false, error:"Missing RESEND_API_KEY env" });
  }

  const TO   = process.env.CONTACT_TO   || "info@fakaunas.lt";
  const FROM = process.env.CONTACT_FROM || "no-reply@fakaunas.lt";

  // BŪTINA: siųsti tik iš @fakaunas.lt, kitaip Resend grąžins 403.
  if (!/@fakaunas\.lt$/i.test(FROM)) {
    return res.status(400).json({ ok:false, error:"CONTACT_FROM must be @fakaunas.lt (else Resend 403)" });
  }

  const body = await readJson(req);
  const built = body.type === "trial" ? buildTrial(body) : buildContact(body);
  if (built.error) {
    return res.status(400).json({ ok:false, error: built.error });
  }
  const { subject, html, replyTo } = built;

  const payload = {
    from: `FA Kaunas <${FROM}>`,
    to: [TO],
    subject,
    html,
    reply_to: replyTo ? [replyTo] : undefined
  };

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      return res.status(r.status).json({
        ok:false,
        error: data?.error?.message || `Resend error (status ${r.status})`
      });
    }
    return res.status(200).json({ ok:true, id:data.id || null });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ ok:false, error:"Bad Gateway: fetch to Resend failed" });
  }
};
