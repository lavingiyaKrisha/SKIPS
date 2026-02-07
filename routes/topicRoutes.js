const express = require('express');
const router = express.Router();
const topicController = require('../controller/topicController');

// Create Topic
router.post('/create', topicController.createTopic);

// Get Topics by Subject
router.get('/subject/:subjectId', topicController.getTopicsBySubject);

module.exports = router;
