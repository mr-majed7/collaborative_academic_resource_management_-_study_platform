const db = require('../models')
const Slide = db.slides


module.exports.renderSlide = async (req, res)=> {
    const {folder_id} = req.params
    res.render('slides', {folder_id})
}
module.exports.createSlide = async (req, res)=> {
    const {folder_id} = req.params
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await Slide.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    res.json({message: 'Slide inserted successfully'})
}
