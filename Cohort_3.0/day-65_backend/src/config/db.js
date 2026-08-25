const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
      let db = await mongoose.connect(process.env.MONGO_URL)
      console.log("mongoDB connect successfuly ")
    } catch (error) {
        console.log("error on connecting DB")
    }
}


module.exports = connectDB