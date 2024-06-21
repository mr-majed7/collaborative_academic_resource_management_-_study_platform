const express = require('express');
const router = express.Router([mergeParams = true]);



//controller import
const folderController = require('../controllers/FolderC')


router.post("/:username", folderController.createFolder);

router.put("/:username/:foldername", folderController.updateFolder);

router.delete("/:username/:foldername", folderController.deleteFolder);



module.exports = router;
