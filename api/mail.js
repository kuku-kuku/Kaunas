// api/mail.js — CJS, saugus GET + el. laiško siuntimas per Resend

function setCors(res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}
}

function parseBody(req) {
  let body = req.body;
  const ct = (req.headers && String(req.headers["content-type"] || "").toLowerCase()) || "";
  try {
    if (ct.includes("application/json")) {
      if (typeof body === "string") body = JSON.parse(body);
      return body || {};
    }
    if (ct.includes("application/x-www-form-urlencoded")) {
      if (typeof body === "string") {
        const params = new URLSearchParams(body);
        return Object.fromEntries(params.entries());
      }
      return body || {};
    }
    if (!body || typeof body === "string") body = JSON.parse(body || "{}");
  } catch (_) {
    body = {};
  }
  return body || {};
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS" || req.method === "HEAD") return res.status(200).end();

  // Healthcheck — NEimportuoja Resend
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      method: "GET",
      hasKey: Boolean(process.env.RESEND_API_KEY),
      note: "healthcheck /api/mail"
    });
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Dinamiškas Resend importas (kad neužlūžtų modulis)
  let ResendCtor = null;
  try {
    const m = await import("resend");
    ResendCtor = m.Resend || (m.default && m.default.Resend) || null;
  } catch (e1) {
    try {
      const m2 = require("resend");
      ResendCtor = m2.Resend || null;
    } catch (e2) {
      return res.status(500).json({
        error: "Resend import failed",
        details: `esm:${(e1 && e1.message) || e1} | cjs:${(e2 && e2.message) || e2}`
      });
    }
  }
  if (!ResendCtor) return res.status(500).json({ error: "Resend import failed", details: "No constructor found" });

  const { name, email, message } = parseBody(req);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Užpildykite visus laukus (vardas, el. paštas, žinutė)" });
  }
  const emailOk = /\S+@\S+\.\S{2,}/.test(String(email).trim());
  if (!emailOk) return res.status(400).json({ error: "Neteisingas el. pašto formatas" });

  if (!process.env.RESEND_API_KEY) return res.status(500).json({ error: "Missing RESEND_API_KEY (ENV)" });

  const resend = new ResendCtor(process.env.RESEND_API_KEY);
  const subject = `Nauja žinutė iš svetainės – ${name}`;
  const text = [`Vardas: ${name}`, `El. paštas: ${email}`, "", "Žinutė:", message].join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from: "FA Kaunas <onboarding@resend.dev>", // po domain verify pasikeisi į administracija@fakaunas.lt
      to: ["administracija@fakaunas.lt", "delivered@resend.dev"],
      reply_to: email,
      replyTo: email,
      subject,
      text
    });
    if (error) return res.status(500).json({ error: "Resend error", details: error });

    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    return res.status(500).json({ error: "Serverio klaida", details: String(err?.message || err) });
  }
};
