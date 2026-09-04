const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await  mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
  } catch (error) {
    console.log("Error on connecting DB")
  }
};


module.exports = connectDB