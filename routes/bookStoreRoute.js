const router = require("express").Router();
const ctrl = require("../controllers/bookStoreCtrl");

router.get("/get-all-book", ctrl.getAllBook);
router.get("/get-book-details/:id", ctrl.getBookDetails);
router.post("/add-new-book", ctrl.addNewBook);
router.put("/book-update/:id", ctrl.updateBook);
router.delete("/book-delete/:id", ctrl.deleteBook);

module.exports = router;
