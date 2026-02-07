const { Schema, model } = require('mongoose');

const studentProgressSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },

  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },

  // Notes Completed
  completedNotes: [{
    type: Schema.Types.ObjectId,
    ref: 'Notes'
  }],

  //Lectures Watched
  watchedLectures: [{
    lectureId: {
      type: Schema.Types.ObjectId,
      ref: 'Lecture'
    },
    watchedAt: {
      type: Date,
      default: Date.now
    }
  }],

  // Quiz Results (multiple attempts allowed)
  quizResults: [{
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz'
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    },
    score: Number,
    totalMarks: Number,
    percentage: Number,
    status: {
      type: String,
      enum: ['Pass', 'Fail']
    },
    attemptedAt: {
      type: Date,
      default: Date.now
    }
  }]

}, { timestamps: true });

module.exports = model('StudentProgress', studentProgressSchema);
