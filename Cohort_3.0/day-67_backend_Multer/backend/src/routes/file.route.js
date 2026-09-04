const express= require("express")
const {upload, memoryUpload} = require("../config/multer")

const route = express.Router()

//!  for localStorage
route.get("/file", upload.single("image")  ,async (req,res)=>{
    
    const file= req.file
    console.log(file)
    
    try {
        res.status(200).json({
            message:"true"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"error on/routes"
        })
    }
})


//! for cloudeStorage

route.get("/cloude", memoryUpload.single("image")  , (req,res)=>{
    const file= req.file
    console.log(file)
    
    try {
        res.status(200).json({
            message:"true"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"error on/routes"
        })
    }
})


module.exports = route