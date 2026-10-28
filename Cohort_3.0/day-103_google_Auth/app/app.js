import express from "express"
import morgan from "morgan"
import authRouter from "../src/routes/auth.routes.js"
import passport from "../src/config/passport.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"))

app.use(authRouter)
app.use(passport.initialize())


export default app 