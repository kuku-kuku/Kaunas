// api/mail.js — Node serverless (CJS), healthcheck + siuntimas per Resend
// Veikia Vercel'e be atskiro backo.

function setCors(res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}
}

function getContentType(req) {
  return ((req.headers && String(req.headers["content-type"] || "").toLowerCase()) || "");
}

async function readRawBody(req) {
  if (req.body) return typeof req.body === "string" ? req.body : JSON.stringify(req.body);
  let raw = "";
  try { for await (const chunk of req) raw += chunk; } catch {}
  return raw;
}

async function parseBody(req) {
  const ct = getContentType(req);
  const raw = await readRawBody(req);
  try {
    if (ct.includes("application/json")) {
      return typeof raw === "string" ? JSON.parse(raw || "{}") : (raw || {});
    }
    if (ct.includes("application/x-www-form-urlencoded")) {
      const params = new URLSearchParams(raw || "");
      return Object.fromEntries(params.entries());
    }
    // defaultu bandome JSON
    return typeof raw === "string" ? JSON.parse(raw || "{}") : (raw || {});
  } catch {
    return {};
  }
}

function serializeDetails(err) {
  try {
    if (!err) return null;
    if (typeof err === "string") return err;
    const out = {};
    for (const k of ["name", "message", "code", "statusCode", "type"]) {
      if (err[k]) out[k] = err[k];
    }
    if (err.error) out.error = serializeDetails(err.error);
    if (err.issues) out.issues = err.issues;
    if (err.response) {
      out.response = {
        status: err.response.status,
        data: err.response.data || err.response.body || null,
      };
    }
    if (!Object.keys(out).length) return JSON.stringify(err);
    return out;
  } catch {
    return String(err);
  }
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS" || req.method === "HEAD") return res.status(200).end();

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      method: "GET",
      hasKey: Boolean(process.env.RESEND_API_KEY),
      to: process.env.CONTACT_TO || "delivered@resend.dev",
      from: process.env.CONTACT_FROM || "FA Kaunas <onboarding@resend.dev>",
      note: "healthcheck /api/mail"
    });
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Dinamiškas importas (veiks tiek ESM, tiek CJS aplinkoj)
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

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY (ENV)" });
  }

  const body = await parseBody(req);
  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Užpildykite visus laukus (vardas, el. paštas, žinutė)" });
  }
  const emailOk = /\S+@\S+\.\S{2,}/.test(String(email).trim());
  if (!emailOk) return res.status(400).json({ error: "Neteisingas el. pašto formatas" });

  const resend = new ResendCtor(process.env.RESEND_API_KEY);

  // Naudojame ENV, kad lengvai perjungtum iš test → prod
  const TO = (process.env.CONTACT_TO || "delivered@resend.dev");
  const FROM = (process.env.CONTACT_FROM || "FA Kaunas <onboarding@resend.dev>");

  const subject = `Nauja žinutė iš svetainės – ${name}`;
  const text = [
    `Vardas: ${name}`,
    `El. paštas: ${email}`,
    ``,
    `Žinutė:`,
    message
  ].join("\n");

  // Pastaba: Resend Node SDK naudoja "reply_to" (snake_case)
  const emailData = {
    from: FROM,
    to: [TO],
    subject,
    text,
    reply_to: email
  };

  try {
    const { data, error } = await resend.emails.send(emailData);
    if (error) {
      return res.status(502).json({ error: "Resend error", details: serializeDetails(error) });
    }
    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    return res.status(500).json({ error: "Serverio klaida", details: serializeDetails(err) });
  }
};
