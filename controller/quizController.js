const {Quiz} = require("../model/content")

//create quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json({
      message: "Quiz created successfully",
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating quiz",
      error: error.message
    });
  }
};


//Get Quiz by Topic
const getQuizByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;

    const quizzes = await Quiz.find({ topicId });

    res.status(200).json({
      message: "Quiz list",
      data: quizzes
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching quizzes",
      error: error.message
    });
  }
};

//Get Single Quiz
const getSingleQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;

    const quiz = await Quiz.findById(quizId);

    res.status(200).json({
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching quiz",
      error: error.message
    });
  }
};

module.exports = {
  createQuiz,
  getQuizByTopic,
  getSingleQuiz
};