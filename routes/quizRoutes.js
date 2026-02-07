const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.post('/', quizController.createQuiz);
router.get('/topic/:topicId', quizController.getQuizByTopic);
router.get('/:quizId', quizController.getSingleQuiz);

module.exports = router;
