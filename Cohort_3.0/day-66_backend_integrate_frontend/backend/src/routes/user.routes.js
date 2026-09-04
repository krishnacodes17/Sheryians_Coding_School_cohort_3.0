const express = require("express")
const { userRegisterContoller, userLoginController, getAllUser } = require("../controllers/user.ontrollers")

const router = express.Router()

router.post("/register", userRegisterContoller)
router.post("/login", userLoginController)
router.get("/alluser", getAllUser)




module.exports = router