const express = require("express");
const router = express.Router([(mergeParams = true)]);

//controller import
const folderController = require("../controllers/FolderC");

router.post("/:username", folderController.createFolder);

router.put("/:username/:folder_id", folderController.updateFolder);

router.delete("/:username/:folder_id", folderController.deleteFolder);

module.exports = router;
