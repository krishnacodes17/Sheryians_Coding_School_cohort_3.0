import express  from "express"


const postRoute = express.Router()


postRoute.post("/post",(req,res)=>{
    // const image = req.file
    const image = req.files
    const {name,email} = req.body

    let daaa = image.forEach((images)=>{
        console.log("Buffer:", images.buffer);
    })

})


export default postRoute