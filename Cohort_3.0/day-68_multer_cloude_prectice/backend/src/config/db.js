import mongoose from "mongoose"

const connectToDB = async()=>{
    try {
        console.log("MONGO_URL =", process.env.MONGO_URL);
        let db = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB