const express = require("express")
const authRoutes = require("./routes/auth.routes")
const cookieparser = require("cookie-parser")
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
     allowedHeaders: ["Content-Type", "Authorization"],
    methods:["GET","POST","PUT","DELETE","PATCH"],
    
}))

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/post",postRouter)
app.use("/api/v1/user",userRouter)



module.exports = app