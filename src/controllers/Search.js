Book = require("../models/Book");
LectureNotes = require("../models/LectureNotes");
LectureVideo = require("../models/LectureVideos");
Folder = require("../models/Folder");
Slide = require("../models/Slides");
const { Op } = require("sequelize");

const User = require("../models/User"); // Assuming you have a User model

// // Example for Book Model
// Book.belongsTo(User, { foreignKey: '_id' }); // Assuming the foreign key is User_id
// User.hasMany(Book, { foreignKey: '_id' });

// // Repeat similar associations for LectureNotes, LectureVideo, and Slide models
// LectureNotes.belongsTo(User, { foreignKey: '_id' });
// User.hasMany(LectureNotes, { foreignKey: '_id' });

// LectureVideo.belongsTo(User, { foreignKey: '_id' });
// User.hasMany(LectureVideo, { foreignKey: '_id' });

// Slide.belongsTo(User, { foreignKey: '_id' });
// User.hasMany(Slide, { foreignKey: '_id' });

module.exports.srch = async (req, res) => {
  const { query, filter } = req.body;

  const searchResults = [];
  try {
    const searchConditions = {
      where: {
        Title: {
          [Op.like]: `%${query}%`,
        },
        Privacy: "public", // Only include public materials
      },
      include: [
        {
          model: Folder,
          include: [
            {
              model: User,
              attributes: ["Name"],
            },
          ],
        },
      ],
    };

    // Search based on the filter
    if (filter === "all" || filter === "book") {
      const books = await Book.findAll(searchConditions);
      searchResults.push(...books);
    }

    if (filter === "all" || filter === "lectureNotes") {
      const lectureNotes = await LectureNotes.findAll(searchConditions);
      searchResults.push(...lectureNotes);
    }

    if (filter === "all" || filter === "lectureVideo") {
      const lectureVideos = await LectureVideo.findAll(searchConditions);
      searchResults.push(...lectureVideos);
    }

    if (filter === "all" || filter === "slides") {
      const slides = await Slide.findAll(searchConditions);
      searchResults.push(...slides);
    }

    // Render the results to the search results page
    res.render("searchResult", { searchResults });
    // console.log(searchResults[0].Folder.User.dataValues.name);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send("Internal Server Error");
  }
};
