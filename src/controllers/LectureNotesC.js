const LectureNotes = require('../models/LectureNotes')




module.exports.renderLectureNotes = async (req, res)=> {
    const {folder_id} = req.params
    res.render('lectureNotes', {folder_id})
}

module.exports.createLectureNotes = async (req, res)=> {
    const {folder_id} = req.params  
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await LectureNotes.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    res.json({message: 'LectureNotes inserted successfully'})
}
