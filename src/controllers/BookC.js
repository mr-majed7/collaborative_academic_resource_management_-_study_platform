const db = require("../models");
const Book = db.Book;

module.exports.renderBooks = async (req, res) => {
  const { folder_id } = req.params;
  res.render("books", { folder_id });
};

module.exports.createBook = async (req, res) => {
  const { folder_id } = req.params;
  DateC = new Date();
  const { Title, FileLink, Progress, Privacy } = req.body;
  await Book.create({
    Folder_id: folder_id,
    Title,
    FileLink,
    Date: DateC,
    Progress,
    Privacy,
  });
  res.json({ message: "Book inserted successfully" });
};

module.exports.updateBook = async (req, res) => {
  const { folder_id, book_id } = req.params;
  const { Title, FileLink, Progress, Privacy } = req.body;
  await Book.update(
    { Title, FileLink, Progress, Privacy },
    { where: { Folder_id: folder_id, _id: book_id } }
  );
  res.json({ message: "Book updated successfully" });
};

module.exports.deleteBook = async (req, res) => {
  const { folder_id, book_id } = req.params;
  await Book.destroy({ where: { Folder_id: folder_id, _id: book_id } });
  res.json({ message: "Book deleted successfully" });
};

module.exports.reviseBook = async (req, res) => {
  const { id } = req.params;

  await Book.update({ Progress: 0 }, { where: { _id: id } });
  res.json({ message: "Book updated successfully" });
};
