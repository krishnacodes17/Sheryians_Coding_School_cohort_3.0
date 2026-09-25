const mongoose = require("mongoose");

const connectToDB =async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
