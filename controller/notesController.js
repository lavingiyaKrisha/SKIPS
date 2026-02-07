const {Notes} = require("../model/content")
const createNotes = async (req, res) => {
  try {
    const notes = await Notes.create(req.body);

    res.status(201).json({
      message: "Notes created successfully",
      data: notes
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating notes",
      error: error.message
    });
  }
};

//getNotesByTopic
const getNotesByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;

    const notes = await Notes.find({ topicId });

    res.status(200).json({
      data: notes
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching notes",
      error: error.message
    });
  }
};

module.exports = {
  createNotes,
  getNotesByTopic
};
