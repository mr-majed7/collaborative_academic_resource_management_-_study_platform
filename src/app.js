const express = require("express");
const app = express();
const bcryptjs = require("bcryptjs");

app.use(express.static("public"));
const isLoggedIn = require("./middlewares/isLoggedin");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Import Sequelize models
const { sequelize } = require("./models");
const db = require("./models");
const User = require("./models/User");
const Folder = require("./models/Folder");
const Book = require("./models/Book");
const Slide = require("./models/Slides");
const LectureVideo = require("./models/LectureVideos");
const LectureNotes = require("./models/LectureNotes");
const PersonalNotes = require("./models/PersonalNotes");

//Controllers Import
const AuthenticationC = require("./controllers/Authentication");
const FolderC = require("./controllers/FolderC");
const RevisionC = require("./controllers/Revision");
const searchC = require("./controllers/Search");

//Routes Import
const FolderRoutes = require("./routes/folderRoutes");
const BookRoutes = require("./routes/bookRoutes");
const lectureNotesRoutes = require("./routes/lectureNotesRoutes");
const lectureVideosRoutes = require("./routes/lectureVideosRoutes");
const slidesRoutes = require("./routes/slidesRoutes");

//setup public route

const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.currentUser = req.session.Username;
  next();
});

// Authentication
app.get("/register", AuthenticationC.renderRegisterForm);

app.post("/register", AuthenticationC.register);

app.get("/login", AuthenticationC.renderLoginForm);

app.post("/login", AuthenticationC.login);

app.post("/logout", AuthenticationC.logout);

// Testing isloggedIn
app.get("/", isLoggedIn, async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("home", { result: users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.use("/folder", FolderRoutes);

app.use("/books", BookRoutes);

app.use("/lectureNotes", lectureNotesRoutes);

app.use("/lectureVideos", lectureVideosRoutes);

app.use("/slides", slidesRoutes);

// Search
app.post("/search", searchC.srch);

// Revision Done
app.post("/revision/done/:id", RevisionC.revisionDone);

app.get("/dashboard/:Username", async (req, res) => {
  const { Username } = req.params;
  const booksRevision = await RevisionC.booksRevision(Username);
  const notesRevision = await RevisionC.notesRevision(Username);
  const videosRevision = await RevisionC.videosRevision(Username);
  const slidesRevision = await RevisionC.slidesRevision(Username);

  res.render("dashboard", {
    Username,
    booksRevision,
    notesRevision,
    videosRevision,
    slidesRevision,
  });
});

app.get("/pomodoro", (req, res) => {
  res.render("pomodoro");
});

app.get("/show_folder/:Username", async (req, res) => {
  const { Username } = req.params;
  const folderInf = await Folder.findAll({ where: { Username } });
  const folderDetails = folderInf.map((folder) => ({
    folder_id: folder.dataValues.folder_id,
    Title: folder.dataValues.Title,
  }));
  res.render("show_folders", { folderDetails, Username });
});

app.get("/materials/:folder_id", async (req, res) => {
  const { folder_id } = req.params;

  const books = await Book.findAll({ where: { folder_id } });
  const bookDetails = books.map((book) => ({
    bookId: book.dataValues._id,
    title: book.dataValues.Title,
    link: book.dataValues.FileLink,
    privacy: book.dataValues.Privacy,
  }));
  const lectureNotes = await LectureNotes.findAll({ where: { folder_id } });
  const lectureNotesDetails = lectureNotes.map((lectureNote) => ({
    lectureNoteId: lectureNote.dataValues._id,
    title: lectureNote.dataValues.Title,
    link: lectureNote.dataValues.FileLink,
    privacy: lectureNote.dataValues.Privacy,
  }));
  const lectureVideos = await LectureVideo.findAll({ where: { folder_id } });
  const lectureVideosDetails = lectureVideos.map((lectureVideo) => ({
    lectureVideoId: lectureVideo.dataValues._id,
    title: lectureVideo.dataValues.Title,
    link: lectureVideo.dataValues.FileLink,
    privacy: lectureVideo.dataValues.Privacy,
  }));
  const slides = await Slide.findAll({ where: { folder_id } });
  const slidesDetails = slides.map((slide) => ({
    slideId: slide.dataValues._id,
    title: slide.dataValues.Title,
    link: slide.dataValues.FileLink,
    privacy: slide.dataValues.Privacy,
  }));
  res.render("Show_materials", {
    folder_id,
    bookDetails,
    lectureNotesDetails,
    lectureVideosDetails,
    slidesDetails,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
