require("dotenv").config()
const app = require("./src/app");
const connectToDB = require("./src/config/db");


const PORT = process.env.PORT || 500

 connectToDB()

app.listen(PORT ,()=>{
    console.log("server is listen on PORT : ", PORT)
})
