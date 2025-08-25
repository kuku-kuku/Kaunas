// api/contact.js — tiesiog peradresuoja į /api/mail handlerį
const mailHandler = require("./mail.js");
module.exports = (req, res) => mailHandler(req, res);
