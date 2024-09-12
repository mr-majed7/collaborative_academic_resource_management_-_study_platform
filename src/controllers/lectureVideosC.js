const db = require("../models");
const LectureVideo = db.lectureVideos;

module.exports.renderLectureVideos = async (req, res) => {
  const { folder_id } = req.params;
  res.render("lectureVideos", { folder_id });
};

module.exports.createLectureVideos = async (req, res) => {
  const { folder_id } = req.params;
  DateC = new Date();
  const { Title, FileLink, Progress, Privacy } = req.body;
  await LectureVideo.create({
    Folder_id: folder_id,
    Title,
    FileLink,
    Date: DateC,
    Progress,
    Privacy,
  });
  res.json({ message: "Lecture Videos inserted successfully" });
};

module.exports.reviseLectureVideos = async (req, res) => {
  const { id } = req.params;
  await LectureVideo.update({ Progress: 0 }, { where: { _id: id } });
  res.json({ message: "Lecture Videos updated successfully" });
};

module.exports.updateLectureVideos = async (req, res) => {
  const { folder_id, video_id } = req.params;
  const { Title, FileLink, Progress, Privacy } = req.body;
  await LectureVideo.update(
    { Title, FileLink, Progress, Privacy },
    { where: { id: video_id } }
  );
  res.json({ message: "Lecture Videos updated successfully" });
};

module.exports.deleteLectureVideos = async (req, res) => {
  const { folder_id, video_id } = req.params;
  await LectureVideo.destroy({ where: { id: video_id } });
  res.json({ message: "Lecture Videos deleted successfully" });
};
