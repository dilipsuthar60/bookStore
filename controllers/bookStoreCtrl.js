const bookModel = require("../models/bookStoreModel");

exports.getAllBook = async (req, res) => {
  try {
    let allBooks = await bookModel.find({});
    res.status(200).json({ success: true, data: allBooks });
  } catch (error) {
    console.log(error);
    res.send(`Internal Server error ${error}`);
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    let { id } = req.params;

    let book = await bookModel.find({ _id: id });

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.log(error);
    res.send(`Internal Server error ${error}`);
  }
};

exports.addNewBook = async (req, res) => {
  try {
    let { title, author, summay } = req.body;
    if (!title)
      return res
        .status(500)
        .json({ success: false, message: "title is not find" });
    if (!author)
      return res
        .status(500)
        .json({ success: false, message: "author is not find" });
    if (!summay)
      return res
        .status(500)
        .json({ success: false, message: "summay is not find" });

    let addBook = new bookModel(req.body);
    await addBook.save();
    res.status(201).json({
      success: true,
      message: "Book Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.send(`Internal Server error ${error}`);
  }
};
exports.updateBook = async (req, res) => {
  try {
    let { id } = req.params;
    await bookModel.findByIdAndUpdate({ _id: id }, { $set: req.body });
    res.status(200).json({
      success: true,
      message: "Book Update Successfully",
    });
  } catch (error) {
    console.log(error);
    res.send(`Internal Server error ${error}`);
  }
};
exports.deleteBook = async (req, res) => {
  try {
    let { id } = req.params;
    const book = await bookModel.findByIdAndDelete(id);
    if (book) {
      res.status(201).json({
        success: true,
        message: "Deleted Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.send(`Internal Server error ${error}`);
  }
};
