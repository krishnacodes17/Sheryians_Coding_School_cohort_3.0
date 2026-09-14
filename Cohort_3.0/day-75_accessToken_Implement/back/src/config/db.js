const mongoose = require("mongoose")


const connectToDb = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb