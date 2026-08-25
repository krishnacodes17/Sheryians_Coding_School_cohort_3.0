const mongoose = require("mongoose")

const ConnectToDB  = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_DB)
        console.log("Databse connected successfully")
    } catch (error) {
        console.log("erroron connecting db :", error)
    }
}


module.exports = ConnectToDB