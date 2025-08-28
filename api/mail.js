// Vercel Serverless Function — Resend HTTP + CORS + JSON
function setCors(res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m]));
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

  const { name="", email="", phone="", preferredContact="", message="", subject="Nauja žinutė iš FA Kaunas" } =
    await readJson(req);

  if (!message || (!email && !phone)) {
    return res.status(400).json({ ok:false, error:"Reikia žinutės ir bent el. pašto arba telefono" });
  }

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
    <h2>Nauja užklausa iš svetainės</h2>
    <p><b>Vardas:</b> ${escapeHtml(name)}</p>
    <p><b>El. paštas:</b> ${escapeHtml(email)}</p>
    <p><b>Telefonas:</b> ${escapeHtml(phone)}</p>
    <p><b>Pageidaujamas kontaktavimas:</b> ${escapeHtml(preferredContact)}</p>
    <hr/>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  </div>`.trim();

  const payload = {
    from: `FA Kaunas <${FROM}>`,
    to: [TO],
    subject,
    html,
    reply_to: email ? [email] : undefined
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
