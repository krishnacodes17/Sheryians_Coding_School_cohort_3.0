const express = require("express")
const cookieParser = require("cookie-parser")
const userRoute = require("./routes/user.routes")
const productRoutes = require("./routes/product.routes")
const cartRoute = require("./routes/cart.routes")

const app = express()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/auth", userRoute)
app.use("/api/v1/products",productRoutes)
app.use("/api/v1/cart",cartRoute)





module.exports = app