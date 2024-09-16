const LectureNotes = require('../models/lectureNotes')




module.exports.renderLectureNotes = async (req, res)=> {
    const {folder_id} = req.params
    res.render('lectureNotes', {folder_id})
}

module.exports.createLectureNotes = async (req, res)=> {
    const {folder_id} = req.params  
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await LectureNotes.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    // res.json({message: 'LectureNotes inserted successfully'})
    const books = await Book.findAll({ where: { folder_id } });
    const bookDetails = books.map(book => ({
        bookId: book.dataValues._id,
        title: book.dataValues.Title,
        link: book.dataValues.FileLink,
        privacy: book.dataValues.Privacy
    }));
    const lectureNotes = await LectureNotes.findAll({ where: { folder_id } });
    const lectureNotesDetails = lectureNotes.map(lectureNote => ({
        lectureNoteId: lectureNote.dataValues._id,
        title: lectureNote.dataValues.Title,
        link: lectureNote.dataValues.FileLink,
        privacy: lectureNote.dataValues.Privacy
    }));
    const lectureVideos = await LectureVideo.findAll({ where: { folder_id } });
    const lectureVideosDetails = lectureVideos.map(lectureVideo => ({
        lectureVideoId: lectureVideo.dataValues._id,
        title: lectureVideo.dataValues.Title,
        link: lectureVideo.dataValues.FileLink,
        privacy: lectureVideo.dataValues.Privacy
    }));
    const slides = await Slide.findAll({ where: { folder_id } });
    const slidesDetails = slides.map(slide => ({
        slideId: slide.dataValues._id,
        title: slide.dataValues.Title,
        link: slide.dataValues.FileLink,
        privacy: slide.dataValues.Privacy
    }));
    res.render('Show_materials', {folder_id, bookDetails, lectureNotesDetails, lectureVideosDetails, slidesDetails });

}

module.exports.reviseLectureNotes = async (req, res)=> {
    const {id} = req.params
    await LectureNotes.update({Progress: 0}, {where: {_id:id}})
    // res.json({message: 'Lecture Notes updated successfully'})
    res.redirect('back')
}
