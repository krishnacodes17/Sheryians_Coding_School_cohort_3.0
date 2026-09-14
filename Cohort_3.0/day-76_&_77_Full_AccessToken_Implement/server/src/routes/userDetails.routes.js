const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const { userDetailsController } = require("../controllers/userDetails.controller")

const userDetailsRouter = express.Router()

userDetailsRouter.get("/",authMiddleware,userDetailsController)



module.exports = userDetailsRouter