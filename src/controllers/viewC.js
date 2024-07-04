const db = require('../models')
const Slide = db.slides
const Book = db.books
const Folder = db.folders
const User = db.users
const LectreNote = db.lectureNotes
const LectureVideos = db.lectureVides

module.exports.viewSildes = async (req, res)=> {
  const {folder_id} = req.params
  const slides = await Slide.findAll({where: {Folder_id: folder_id}})
  if(req.params.sort){
    slides.sort((a, b)=> a[req.params.sort] - b[req.params.sort])
  }
  res.json(slides)
}

module.exports.viewBooks = async (req, res)=> {
  const {folder_id} = req.params
  const books = await Book.findAll({where: {Folder_id: folder_id}})
  if(req.params.sort){
    books.sort((a, b)=> a[req.params.sort] - b[req.params.sort])
  }
  res.json(books)
}

module.exports.viewFolders = async (req, res)=> {
  const {user_id} = req.params
  const folders = await Folder.findAll({where: {User_id: user_id}})
  if(req.params.sort){
    folders.sort((a, b)=> a[req.params.sort] - b[req.params.sort])
  }
  res.json(folders)
}

module.exports.viewLectureNotes = async (req, res)=> {
  const {folder_id} = req.params
  const lectureNotes = await LectreNote.findAll({where: {Folder_id: folder_id}})
  if(req.params.sort){
    lectureNotes.sort((a, b)=> a[req.params.sort] - b[req.params.sort])
  }
  res.json(lectureNotes)
}

module.exports.viewLectureVideos = async (req, res)=> {
  const {folder_id} = req.params
  const lectureVideos = await LectureVideos.findAll({where: {Folder_id: folder_id}})
  if(req.params.sort){
    lectureVideos.sort((a, b)=> a[req.params.sort] - b[req.params.sort])
  }
  res.json(lectureVideos)
}
