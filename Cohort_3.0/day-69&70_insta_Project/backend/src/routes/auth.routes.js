const express = require("express")
const { userRegisterController, userLoginController, currentUserLoginController } = require("../controllers/auth.controller")



const authRoutes = express.Router()

authRoutes.post("/register",userRegisterController)
authRoutes.post("/login",userLoginController)
authRoutes.get("/me",currentUserLoginController)


module.exports = authRoutes