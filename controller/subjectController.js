const { Subject, Topic, Notes, Lecture, Quiz } = require('../model/content');

// CREATE SUBJECT
const createSubject = async (req, res) => {
  try {
    const { name, std, description } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Subject name is required"
      });
    }

    const existingSubject = await Subject.findOne({ name, std });

    if (existingSubject) {
      return res.status(400).json({
        message: "Subject already exists"
      });
    }

    const subject = await Subject.create({
      name,
      std,
      description
    });

    return res.status(201).json({
      message: "Subject created successfully",
      data: subject
    });

  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
      error: err.message
    });
  }
};


// GET ALL SUBJECTS
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();

    return res.status(200).json({
      message: "Subjects retrieved successfully",
      data: subjects
    });

  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
      error: err.message
    });
  }
};


// GET SUBJECT BY ID
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found"
      });
    }

    return res.status(200).json({
      message: "Subject retrieved successfully",
      data: subject
    });

  } catch (err) {
    return res.status(400).json({
      message: "Invalid ID",
      error: err.message
    });
  }
};



//get full Content about Subject
const getFullSubjectContent = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const subject = await Subject.findById(subjectId);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const topics = await Topic.find({ subjectId });

    const fullData = [];

    for (let topic of topics) {
      const notes = await Notes.find({ topicId: topic._id });
      const lectures = await Lecture.find({ topicId: topic._id });
      const quizzes = await Quiz.find({ topicId: topic._id });

      fullData.push({
        topic,
        notes,
        lectures,
        quizzes
      });
    }

    res.status(200).json({
      subject,
      topics: fullData
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching content",
      error: error.message
    });
  }
};


module.exports = {
  createSubject,
  getAllSubjects,
  getSubjectById,
  getFullSubjectContent
};
