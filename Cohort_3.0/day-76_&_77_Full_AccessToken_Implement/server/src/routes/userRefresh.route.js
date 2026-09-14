const express = require("express")
const userRefreshController = require("../controllers/userRefresh.controller")


const userRefreshRouter = express.Router()

userRefreshRouter.post("/",userRefreshController)


module.exports = userRefreshRouter