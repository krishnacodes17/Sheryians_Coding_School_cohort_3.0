import express from "express"
import razorpay from "../config/razorpay.js";
import paymentModel from "../models/payments.model.js";
import productModel from "../models/product.model.js";

const paymentRoutes = express.Router()


paymentRoutes.post("/:productId" ,async (req,res)=>{

    const {productId} = req.params;
    console.log("this is productId : " , productId);

    const product = await productModel.findById(productId)
    
    if(!product){
        return res.status(404).json({
            message:"Product not found" 
        })
    }


    console.log("kpfdkpfkpkfgfgdkfg");

    const order = await razorpay.orders.create({
        amount:Math.round(product.price * 100),
        currency:"INR",
        receipt: `rcpt_${Date.now()}`,
        notes:{
            productId:String(product._id)
        }
    })

    console.log("this is order : ", order);

    await paymentModel.create({
        orderId:order.id,
        amount:order.amount,
        currency:order.currency,
        product:product._id,
        // user:req.user._id,
        user:"6ad083e5f2ae44046d61cb5d",
        status:"pending"
    })

    res.status(201).json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: process.env.RAZORPAY_KEY_ID,
  });



})



export default paymentRoutes