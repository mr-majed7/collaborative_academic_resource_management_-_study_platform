const express = require('express'); 
const router = express.Router([mergeParams = true]); 



//controller import 
const folderController = require('../controllers/FolderC')


router.post("/:username", folderController.createFolder);



module.exports = router;