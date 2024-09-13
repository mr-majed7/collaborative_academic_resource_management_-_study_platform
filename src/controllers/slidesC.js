const db = require("../models");
const Slide = db.Slide;

module.exports.renderSlide = async (req, res) => {
  const { folder_id } = req.params;
  res.render("slides", { folder_id });
};
module.exports.createSlide = async (req, res) => {
  const { folder_id } = req.params;
  DateC = new Date();
  const { Title, FileLink, Progress, Privacy } = req.body;
  await Slide.create({
    Folder_id: folder_id,
    Title,
    FileLink,
    Date: DateC,
    Progress,
    Privacy,
  });
  res.json({ message: "Slide inserted successfully" });
};

module.exports.reviseSlide = async (req, res) => {
  const { id } = req.params;

  await Slide.update({ Progress: 0 }, { where: { _id: id } });
  res.json({ message: "Slide updated successfully" });
};

module.exports.updateSlide = async (req, res) => {
  const { folder_id, slide_id } = req.params;
  const { Title, FileLink, Progress, Privacy } = req.body;
  await Slide.update(
    { Title, FileLink, Progress, Privacy },
    { where: { _id: slide_id } }
  );
  res.json({ message: "Slide updated successfully" });
};

module.exports.deleteSlide = async (req, res) => {
  const { folder_id, slide_id } = req.params;
  await Slide.destroy({ where: { _id: slide_id } });
  res.json({ message: "Slide deleted successfully" });
};
