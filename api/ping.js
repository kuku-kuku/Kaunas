// api/ping.js — minimalus ping (CommonJS)
module.exports = async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch {}

  if (req.method === "OPTIONS" || req.method === "HEAD") return res.status(200).end();

  return res.status(200).json({
    ok: true,
    method: req.method,
    url: req.url,
    note: "PING /api/ping.js",
    node: process.version
  });
};
