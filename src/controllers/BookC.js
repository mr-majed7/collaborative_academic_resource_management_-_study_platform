const Book = require('../models/Book')




module.exports.renderBooks = async (req, res)=> {
    const {folder_id} = req.params
    res.render('books', {folder_id})
}

module.exports.createBook = async (req, res)=> {
    const {folder_id} = req.params
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await Book.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    res.json({message: 'Book inserted successfully'})
}
