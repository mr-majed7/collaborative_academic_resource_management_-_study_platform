const express = require('express')
const router = express.Router({ mergeParams: true })

//controller import
const viewController = require('../controllers/viewC')

router.get("/slides/:folder_id", viewController.viewSildes)

router.get("/slides/:folder_id/:sort", viewController.viewSildes)

router.get("/books/:folder_id", viewController.viewBooks)

router.get("/books/:folder_id/:sort", viewController.viewBooks)

router.get("/folders/:user_id", viewController.viewFolders)

router.get("/folders/:user_id/:sort", viewController.viewFolders)

router.get("/lectureNotes/:folder_id", viewController.viewLectureNotes)

router.get("/lectureNotes/:folder_id/:sort", viewController.viewLectureNotes)

router.get("/lectureVideos/:folder_id", viewController.viewLectureVideos)

router.get("/lectureVideos/:folder_id/:sort", viewController.viewLectureVideos)

module.exports = router
