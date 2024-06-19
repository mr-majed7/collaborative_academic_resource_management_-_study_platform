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
