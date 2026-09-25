const express = require("express")
const { urlController, getAllUrlController, urlRedirect, deleteUrlcontroller } = require("../controllers/url.controller")

const urlRouter = express.Router()

urlRouter.post("/url",urlController)
urlRouter.get("/url",getAllUrlController)
urlRouter.delete("/url/:id",deleteUrlcontroller)


module.exports = urlRouter