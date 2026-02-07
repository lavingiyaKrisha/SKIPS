// Student History
const studentProgressSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  completedNotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notes'
  }],
  watchedLectures: [{
    lectureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lecture'
    },
    // progress: Number 
  }],
  quizResults: [{
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz'
    },
    score: Number,
    totalMarks: Number,
    attemptedAt: Date
  }]
});

const StudentProgress = mongoose.model('StudentProgress', studentProgressSchema);

module.exports = { StudentProgress };