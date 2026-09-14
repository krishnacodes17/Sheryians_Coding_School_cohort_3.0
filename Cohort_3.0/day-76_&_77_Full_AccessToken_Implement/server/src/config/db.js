const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};



module.exports = connectToDB