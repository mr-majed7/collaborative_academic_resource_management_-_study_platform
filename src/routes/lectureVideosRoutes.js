const express = require('express');
const router = express.Router([ mergeParams= true ]); 


//controller import
const lectureVideosController = require('../controllers/lectureVideosC')


router.get("/:folder_id", lectureVideosController.renderLectureVideos);

router.post("/:folder_id", lectureVideosController.createLectureVideos);





module.exports = router;