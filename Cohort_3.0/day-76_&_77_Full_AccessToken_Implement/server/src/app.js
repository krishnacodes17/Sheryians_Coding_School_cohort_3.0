const cookieParser = require("cookie-parser")
const express = require("express")
const userRouter = require("./routes/user.routes")
const userDetailsRouter = require("./routes/userDetails.routes")
const userRefreshRouter = require("./routes/userRefresh.route")

const app = express()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/auth",userRouter)

app.use("/api/v1/userDetail",userDetailsRouter)

app.use("/api/v1/refresh",userRefreshRouter)


module.exports = app