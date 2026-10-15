import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        amount:{
            type:String,
            required:true
        },
        currency:{
            type:String,
            default:"INR"
        }
    }
})


const productModel = mongoose.model("Product", productSchema)

export default productModel