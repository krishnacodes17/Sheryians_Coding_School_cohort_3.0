const express = require("express")
const { followUserController } = require("../controllers/user.controller")
const authMiddleware = require("../middleware/auth.middleware")

const userRouter = express.Router()


userRouter.post("/follow/:userid",authMiddleware,followUserController)





module.exports = userRouter