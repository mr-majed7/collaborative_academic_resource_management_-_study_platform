const db = require('../models')
const Folder = db.Folder


module.exports.createFolder = async (req, res)=> {
    const {username} = req.params
    const {Title, Privacy} = req.body
    const DateC = new Date()
    await Folder.create({username, Title, Privacy, Date:DateC})

    const  folder = await  Folder.findOne({where: {username}})
    const folder_id  = folder.folder_id
    res.render('materials', {folder_id})
}

module.exports.updateFolder = async (req, res)=> {
  const {folder_id} = req.params
  const {Title, Privacy} = req.body
  await Folder.update({Title, Privacy}, {where: {folder_id}})
  res.json({message: 'Folder updated successfully'})
}

module.exports.deleteFolder = async (req, res)=> {
  const {folder_id} = req.params
  await Folder.destroy({where: {folder_id}})
  res.json({message: 'Folder deleted successfully'})
}
