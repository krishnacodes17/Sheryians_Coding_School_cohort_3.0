const mongoose  = require("mongoose")



const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("database connected successfuly")
        
    } catch (error) {
        console.log("error on connecting DB ", error)
    }
}

module.exports = connectDB