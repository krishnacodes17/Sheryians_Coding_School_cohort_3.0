const mongoose = require("mongoose")


const connectToDb = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected successFullly")
    } catch (error) {
        console.log("error", error)
    }
}


module.exports = connectToDb