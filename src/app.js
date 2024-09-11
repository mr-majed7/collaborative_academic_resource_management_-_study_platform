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

//Routes Import
const FolderRoutes = require("./routes/folderRoutes");
const BookRoutes = require("./routes/bookRoutes");
const lectureNotesRoutes = require("./routes/lectureNotesRoutes");
const lectureVideosRoutes = require("./routes/lectureVideosRoutes");
const slidesRoutes = require("./routes/slidesRoutes");
const viewRouter = require("./routes/viewRouter");

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

app.use("/view", viewRouter);
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
