import "dotenv/config"


const _config = {
    MONGO_URL: process.env.MONGO_URI,
    PORT: process.env.PORT,
    RAZORPAY_KEY_SECRET:process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_KEY_ID:process.env.RAZORPAY_KEY_ID
}

   

export default Object.freeze(_config) 