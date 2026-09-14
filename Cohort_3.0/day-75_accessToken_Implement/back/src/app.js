const express = require("express")
const userRoute = require("./routes/user.routes")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth",userRoute)




module.exports = app