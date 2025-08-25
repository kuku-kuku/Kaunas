// api/mail.js — ultra-minimalus echo be jokių importų
module.exports = async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}

  if (req.method === "OPTIONS" || req.method === "HEAD") return res.status(200).end();

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      method: "GET",
      note: "minimal /api/mail GET"
    });
  }

  if (req.method === "POST") {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      let parsed = null;
      try { parsed = JSON.parse(raw || "{}"); } catch { parsed = { raw }; }
      return res.status(200).json({ ok: true, method: "POST", received: parsed });
    });
    return;
  }

  return res.status(405).json({ error: "Method not allowed" });
};
