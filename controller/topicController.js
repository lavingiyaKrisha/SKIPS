const { Topic } = require('../model/content');

// Create Topic
const createTopic = async (req, res) => {
  try {
    const { subjectId, name, description } = req.body;

    const newTopic = await Topic.create({
      subjectId,
      name,
      description
    });

    res.status(201).json({
      message: "Topic created successfully",
      data: newTopic
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating topic",
      error: error.message
    });
  }
};

// Get Topics By Subject
const getTopicsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const topics = await Topic.find({ subjectId });

    res.status(200).json({
      message: "Topics fetched successfully",
      data: topics
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching topics",
      error: error.message
    });
  }
};

module.exports = {
  createTopic,
  getTopicsBySubject
};
