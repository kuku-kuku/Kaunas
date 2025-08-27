// Vercel Serverless Function — CORS + JSON body + Resend HTTP
function setCors(res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}
}

function safe(str) {
  return String(str ?? "").replace(/[&<>]/g, s => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[s]));
}

async function parseBody(req) {
  const ct = String(req.headers["content-type"] || "").toLowerCase();
  if (ct.includes("application/json")) {
    const chunks = [];
    for await (const ch of req) chunks.push(ch);
    const raw = Buffer.concat(chunks).toString("utf8");
    try { return JSON.parse(raw || "{}"); } catch { return {}; }
  }
  // fallback: no body / form
  return {};
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Only POST is allowed." });

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY env." });
    }

    const TO_ADDRESS = process.env.MAIL_TO || "administracija@fakaunas.lt"; // pasikeisk į norimą gavėją
    const FROM_ADDRESS = "FA Kaunas <no-reply@fakaunas.lt>";      // svarbu: @fakaunas.lt domenas!

    const body = await parseBody(req);
    const {
      name = "",
      email = "",
      phone = "",
      preferredContact = "",
      message = "",
      subject = "Nauja žinutė iš FA Kaunas svetainės"
    } = body;

    // Minimalus patikrinimas
    if (!message || (!email && !phone)) {
      return res.status(400).json({ ok: false, error: "Reikia bent žinutės ir (el. pašto arba telefono)." });
    }

    const html =
      `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
        <h2>Nauja užklausa iš svetainės</h2>
        <p><b>Vardas:</b> ${safe(name)}</p>
        <p><b>El. paštas:</b> ${safe(email)}</p>
        <p><b>Telefonas:</b> ${safe(phone)}</p>
        <p><b>Pageidaujamas kontaktavimas:</b> ${safe(preferredContact)}</p>
        <hr/>
        <p style="white-space:pre-wrap">${safe(message)}</p>
      </div>`;

    const payload = {
      from: FROM_ADDRESS,                   // <- čia turi būti @fakaunas.lt
      to: [TO_ADDRESS],
      subject,
      html,
      reply_to: email ? [email] : undefined // kad atsakant nueitų lankytojui
    };

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      // Pvz., 403 "You can only send testing emails..." kai from ≠ @fakaunas.lt
      return res.status(r.status).json({
        ok: false,
        error: data?.error?.message || `Resend error (status ${r.status})`
      });
    }

    return res.status(200).json({ ok: true, id: data.id || null });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error." });
  }
};
