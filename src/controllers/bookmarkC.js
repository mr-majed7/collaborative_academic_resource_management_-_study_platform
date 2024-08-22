//BOOKMARK MATERIALS

const Bookmark = require("../models/bookmarkM");
const db = require("../models");
const Book = db.Book;
const Slides = db.Slides;
const LectureNotes = db.LectureNotes;
const LectureVideos = db.LectureVideos;
const PersonalNotes = db.PersonalNotes;
const User = db.User;

// Create and Save a new Bookmark
exports.create = (req, res) => {
  // Validate request
  if (!req.body.User_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Bookmark
  const bookmark = {
    User_id: req.body.User_id,
    Owner_id: req.body.Owner_id,
    Material_id: req.body.Material_id,
    Material_type: req.body.Material_type,
  };

  // Save Bookmark in the database
  Bookmark.create(bookmark)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookmark.",
      });
    });
};
// Retrieve all Bookmarks from the database with user_id.

exports.findAll = (req, res) => {
  const User_id = req.query.User_id;
  var condition = User_id ? { User_id: { [Op.like]: `%${User_id}%` } } : null;
  Bookmark.findAll({
    where: condition,
    include: [
      { model: Book, as: "book" },
      { model: Slides, as: "slides" },
      { model: LectureNotes, as: "lectureNote" },
      { model: LectureVideos, as: "Lecturevideo" },
      { model: PersonalNotes, as: "PersonalNote" },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarks.",
      });
    });
};
