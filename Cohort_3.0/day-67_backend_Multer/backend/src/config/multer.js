const multer = require("multer")


//  ! for local storage 

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },


    filename:(req,file,cb)=>{
        console.log("filename  is >> : ", file)
        cb(null , Date.now() + "_" +  file.originalname)    // ? yeha ham date.now() issliyederahehaiki har baar jobhi fileaaye usska name alag raher seme name rahega too oouss file ko name lega (uploads folder me nahi jayegi )
    }
})

const upload = multer({storage:storage})





//  ! for cloude storage
const cloudeStorage = multer.memoryStorage();
const memoryUpload = multer({storage:cloudeStorage})



module.exports = {upload , memoryUpload}