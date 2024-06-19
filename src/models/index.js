const sequelize = require('../config/database');
const User = require('./user');
const Folder = require('./folder');
const Book = require('./book');
const Slide = require('./slide');
const LectureVideo = require('./lectureVideo');
const LectureNotes = require('./lectureNotes');
const PersonalNotes = require('./personalNotes');

// Sync all models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
  Folder,
  Book,
  Slide,
  LectureVideo,
  LectureNotes,
  PersonalNotes
};




