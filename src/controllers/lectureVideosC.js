const LectureVideo = require('../models/lectureVideo')




module.exports.renderLectureVideos = async (req, res)=> {
    const {folder_id} = req.params
    res.render('lectureVideos', {folder_id})
}

module.exports.createLectureVideos = async (req, res)=> {
    const {folder_id} = req.params  
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await LectureVideo.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    res.json({message: 'Lecture Videos inserted successfully'})
}

module.exports.reviseLectureVideos = async (req, res)=> {
    const {id} = req.params
    await LectureVideo.update({Progress: 0}, {where: {_id:id}})
    res.json({message: 'Lecture Videos updated successfully'})
}