import { Schema, model } from 'mongoose';

// Subject Schema
const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ['English', 'Mathematics', 'Science', 'Social Studies', 'Gujarati', 'Hindi', 'Sanskrit']
  },
  std: {
    type: String,
    default: '6th'
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Notes Schema
const notesSchema = new Schema({
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  chapter: String,
  content: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Lecture Schema
const lectureSchema = new Schema({
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  chapter: String,
  description: String,
  videoUrl: {
    type: String,
    required: true
  },
//   duration: Number, // in minutes
  thumbnail: String,
});

// Quiz Schema
const quizSchema = new Schema({
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  chapter: String,
  description: String,
  duration: Number, // minutes
  totalMarks: Number,
  passingMarks: Number,
  questions: [{
    questionText: {
      type: String,
      required: true
    },
    questionType: {
      type: String,
      enum: ['multiple-choice', 'true-false', 'short-answer'],
      default: 'multiple-choice'
    },
    options: [String], // For multiple choice questions
    correctAnswer: {
      type: String,
      required: true
    },
    marks: {
      type: Number,
      default: 0
    },
    explanation: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create models
const Subject = model('Subject', subjectSchema);
const Notes = model('Notes', notesSchema);
const Lecture = model('Lecture', lectureSchema);
const Quiz = model('Quiz', quizSchema);

export default {
  Subject,
  Notes,
  Lecture,
  Quiz,
};