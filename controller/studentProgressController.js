const StudentProgress = require("../model/studentProgress");

// Add new student progress
const addStudentProgress = async (req, res) => {
  try {
    const newProgress = new StudentProgress(req.body);
    const savedProgress = await newProgress.save();
    res.status(201).json(savedProgress);
  } catch (error) {
    res.status(400).json({ message: "Error adding student progress", error });
  }
};

// Get all student progress
const getAllProgress = async (req, res) => {
  try {
    const progressList = await StudentProgress.find()
      .populate('studentId', 'name email')   // optional: populate student info
      .populate('subjectId', 'name');       // optional: populate subject info
    res.status(200).json(progressList);
  } catch (error) {
    res.status(500).json({ message: "Error fetching progress", error });
  }
};

// Get progress by student ID
const getProgressByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const progress = await StudentProgress.find({ studentId })
      .populate('subjectId', 'name')
      .populate('completedNotes', 'title')
      .populate('watchedLectures.lectureId', 'title')
      .populate('quizResults.quizId', 'title')
      .populate('quizResults.topicId', 'name');
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student progress", error });
  }
};

// Update progress by ID
const updateProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProgress = await StudentProgress.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true } // return updated doc
    );
    if (!updatedProgress) return res.status(404).json({ message: "Progress not found" });
    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(400).json({ message: "Error updating progress", error });
  }
};

// Delete progress by ID
const deleteProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await StudentProgress.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Progress not found" });
    res.status(200).json({ message: "Progress deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting progress", error });
  }
};

module.exports = {
  addStudentProgress,
  getAllProgress,
  getProgressByStudent,
  updateProgress,
  deleteProgress
};
