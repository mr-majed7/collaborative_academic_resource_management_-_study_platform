const express = require('express');
const router = express.Router([ mergeParams= true ]);


//controller import
const slidesController = require('../controllers/slidesC')

router.post("/revise/:id", slidesController.reviseSlide);

router.get("/:folder_id", slidesController.renderSlide);

router.post("/:folder_id", slidesController.createSlide);

router.put("/:folder_id/:slide_id", slidesController.updateSlide);

router.delete("/:folder_id/:slide_id", slidesController.deleteSlide);



module.exports = router;
