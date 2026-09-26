const express = require("express")
const { authUSer } = require("./authUser")
const authValidate = require("./auth_Validator")
const { testController } = require("./test")
const app = express()
app.use(express.json())

app.get("/url",authValidate,authUSer)
app.post("/test",testController)
app.get("")


module.exports = app