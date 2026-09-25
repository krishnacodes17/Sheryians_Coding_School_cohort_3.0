const express = require("express");
const urlRedirectController = require("../controllers/urlRedirect");

const urlRedirectRouter = express.Router();

urlRedirectRouter.get("/:code", urlRedirectController);
urlRedirectRouter.post("/:code", urlRedirectController);

module.exports = urlRedirectRouter;