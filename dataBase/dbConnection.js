const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://dilipsuthar212000:9983114551@cluster0.qdyicgd.mongodb.net/?retryWrites=true&w=majority";

const connectdb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!!!");
};

module.exports = connectdb;
