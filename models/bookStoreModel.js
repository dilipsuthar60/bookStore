const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 20,
  },
  author: {
    type: String,
    maxLength: 50,
  },
  summary: {
    type: String,
    maxLength: 5000,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
