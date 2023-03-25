const mongoose = require("mongoose");
const uri = "mongodb+srv://aniCare:aniCare@anicare.cnztnvu.mongodb.net/test";

const connectDB = async () => {
  await mongoose.connect(uri);
  console.log("connected to db");
};

module.exports = connectDB;
