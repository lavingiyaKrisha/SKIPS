const router = require("express").Router();
const studentProgressController = require("../controller/studentProgressController");

// Create new progress
router.post('/', studentProgressController.addStudentProgress);

// Get all progress
router.get('/', studentProgressController.getAllProgress);

// Get progress by student ID
router.get('/student/:studentId', studentProgressController.getProgressByStudent);

// Update progress by ID
router.put('/:id', studentProgressController.updateProgress);

// Delete progress by ID
router.delete('/:id', studentProgressController.deleteProgress);

module.exports = router;
