const { Lecture } = require('../model/content');
const createLecture = async (req, res) => {
  try {
    const lecture = await Lecture.create(req.body);

    res.status(201).json({
      message: "Lecture created",
      data: lecture
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating lecture",
      error: error.message
    });
  }
};


const getLectureByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;

    const lectures = await Lecture.find({ topicId });

    res.status(200).json({
      data: lectures
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching lectures",
      error: error.message
    });
  }
};

module.exports = {
  createLecture,
  getLectureByTopic
};

