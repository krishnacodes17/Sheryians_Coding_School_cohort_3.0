const express = require("express")
const cors = require("cors")
const connectToDB = require("./config/db")
const urlRouter = require("./routes/url.routes")
const urlRedirectRouter = require("./routes/urlRedirect.routes")
const app = express()
app.use(cors())
app.use(express.json())


connectToDB()
app.use("/api",urlRouter)

app.use("/",urlRedirectRouter)


module.exports = app