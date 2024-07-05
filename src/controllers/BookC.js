const Book = require('../models/book')




module.exports.renderBooks = async (req, res)=> {
    const {folder_id} = req.params
    res.render('books', {folder_id})
}

module.exports.createBook = async (req, res)=> {
    const {folder_id} = req.params 
    console.log(folder_id) 
    DateC = new Date()
    const {Title, FileLink, Progress, Privacy} = req.body
    await Book.create({Folder_id:folder_id, Title, FileLink, Date: DateC, Progress, Privacy})
    res.json({message: 'Book inserted successfully'})
}

module.exports.reviseBook = async (req, res)=> {    
    const {id} = req.params
    
    await Book.update({Progress:0}, {where: {_id:id}})
    res.json({message: 'Book updated successfully'})
}
