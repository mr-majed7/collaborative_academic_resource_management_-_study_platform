const db = require("../models");
const LectureNotes = db.LectureNotes;

module.exports.renderLectureNotes = async (req, res) => {
  const { folder_id } = req.params;
  res.render("lectureNotes", { folder_id });
};

module.exports.createLectureNotes = async (req, res) => {
  const { folder_id } = req.params;
  DateC = new Date();
  const { Title, FileLink, Progress, Privacy } = req.body;
  await LectureNotes.create({
    Folder_id: folder_id,
    Title,
    FileLink,
    Date: DateC,
    Progress,
    Privacy,
  });
  res.json({ message: "LectureNotes inserted successfully" });
};

module.exports.reviseLectureNotes = async (req, res) => {
  const { id } = req.params;
  await LectureNotes.update({ Progress: 0 }, { where: { _id: id } });
  res.json({ message: "Lecture Notes updated successfully" });
};

module.exports.updateLectureNotes = async (req, res) => {
  const { folder_id, id } = req.params;
  const { Title, FileLink, Progress, Privacy } = req.body;
  await LectureNotes.update(
    { Title, FileLink, Progress, Privacy },
    { where: { id } }
  );
  res.json({ message: "LectureNotes updated successfully" });
};

module.exports.deleteLectureNotes = async (req, res) => {
  const { folder_id, id } = req.params;
  await LectureNotes.destroy({ where: { id } });
  res.json({ message: "LectureNotes deleted successfully" });
};
