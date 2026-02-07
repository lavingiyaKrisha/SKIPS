const express = require('express');
const router = express.Router();
const lectureController = require('../controller/lectureController');

router.post('/', lectureController.createLecture);
router.get('/topic/:topicId', lectureController.getLectureByTopic);

module.exports = router;
