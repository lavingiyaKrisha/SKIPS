const express = require('express');
const router = express.Router();
const notesController = require('../controller/notesController');

router.post('/', notesController.createNotes);
router.get('/topic/:topicId', notesController.getNotesByTopic);

module.exports = router;
