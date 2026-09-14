const express = require("express")
const { userRegisterController, userLoginController, userMeController, userRefreshController } = require("../controllers/user.controller")


const userRoute = express.Router()

userRoute.post("/register",userRegisterController)
userRoute.get("/me",userMeController)
userRoute.get("/refresh",userRefreshController)
userRoute.post("/login",userLoginController)



module.exports = userRoute