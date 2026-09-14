const express = require("express")
const {userLoginController, userRegisterController } = require("../controllers/user.controller")

const userRouter = express.Router()


userRouter.post("/register",userRegisterController)
userRouter.post("/login",userLoginController)


module.exports = userRouter