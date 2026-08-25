require('dotenv').config()
const express = require("express")
const ConnectToDB = require('./config/db')
const userModel = require('./models/userModel')

const app = express()
app.use(express.json())


app.post("/user",async(req,res)=>{
    let {name , about}= req.body

    const data = await userModel.create({
        name:name,
        about:about
    })

    res.send({
        success:true,
        data
    })

})


ConnectToDB()


PORT= process.env.PORT || 3000
module.exports = app 