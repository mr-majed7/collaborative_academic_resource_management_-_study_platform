const express = require('express')
const router = express.Router({ mergeParams: true })

//controller import
const viewController = require('../controllers/viewC')

router.get("/slides/:folder_id", viewController.viewSildes)

router.get("/books/:folder_id", viewController.viewBooks)

router.get("/folders/:user_id", viewController.viewFolders)

router.get("/lectureNotes/:folder_id", viewController.viewLectureNotes)

router.get("/lectureVideos/:folder_id", viewController.viewLectureVideos)

module.exports = router
