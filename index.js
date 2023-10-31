const express = require("express");

const connectdb = require("./dataBase/dbConnection");
const bookModel = require("./models/bookStoreModel");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

connectdb();

app.use("/api/v1", require("./routes/bookStoreRoute"));

app.listen(PORT, () => {
  console.log(`app is runing succesfully ${PORT}`);
});
