const express = require('express');
const router = express.Router([ mergeParams= true ]);


//controller import
const lectureVideosController = require('../controllers/lectureVideosC')


router.post("/revise/:id", lectureVideosController.reviseLectureVideos);

router.get("/:folder_id", lectureVideosController.renderLectureVideos);

router.post("/:folder_id", lectureVideosController.createLectureVideos);

router.put("/:folder_id/:video_id", lectureVideosController.updateLectureVideos);

router.delete("/:folder_id/:video_id", lectureVideosController.deleteLectureVideos);




module.exports = router;
