const express  = require("express")
const fileRoute = require("./routes/file.route")


const app = express()

app.use(express.json())


app.use("/api/v1/files",fileRoute)





module.exports= app