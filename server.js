// EdTech01- Al-Powered Personalized Learning & Doubt-Resolution Platform for Indian Schools and Colleges

// Background & Problem Context

// India's education system is highly diverse, with students coming from different socio-economic backgrounds, learning speeds, languages, and access to resources. While digital education platforms have increased after the pandemic, most EdTech solutions still follow a one-size-fits-all approach. Students often struggle with concepts but hesitate to ask questions due to fear, lack of confidence, or absence of real-time support.

// Teachers, on the other hand, handle large class sizes and cannot provide individual attention to every learner. Doubts remain unresolved, learning gaps widen over time, and students gradually lose interest. Existing platforms either focus only on recorded content or provide generic chatbots that fail to understand student context, syllabus, or learning history.

// There is a strong need for an Al-driven personalized learning system that continuously understands each student's learning behaviour, identifies weak areas, provides adaptive content, and offers instant, intelligent doubt resolution through an Al chatbot-similar to how a personal tutor works.

// Problem Statement

// Design and develop an Al-Powered Personalized Learning and Doubt-Resolution Platform that adapts learning content to individual students and provides real-time, intelligent academic support through an Al-based chatbot.

// The system should analyse student performance, learning patterns, and interaction history to dynamically personalize lessons, assessments, and recommendations. The integrated Al chatbot must understand curriculum context, student level, previous mistakes, and learning goals to deliver accurate and meaningful explanations.

// Objectives

// To provide personalized learning paths based on individual student strengths and weaknesses

// To reduce dependency on human tutors using an Al-powered academic chatbot

// To improve conceptual clarity through continuous feedback and adaptive learning

// To support multilingual and low-bandwidth environments in India

// Core Features & Functional Requirements

// 1. Personalized Learning Engine

// Analyse student performance from quizzes, assignments, and tests

// .

// Identify weak concepts, knowledge gaps, and learning speed

// .

// Automatically recommend videos, notes, practice problems, and revision plans

// . Adjust difficulty level dynamically based on student progress

// Based Academic Chatbot (Mandatory Component)

// Context-aware Al chatbot trained on syllabus-specific data

// Understands student class, subject, chapter, and previous mistakes

// Supports natural language questions (text + optional voice)

// Provides:

// Step-by-step explanations

// Concept simplification

// Real-life examples

// Follow-up questions to test understanding

// Learns from interactions to improve future responses

// 3. Intelligent Doubt Resolution System

// Instant doubt-solving without waiting for teacher availability

// Ability to ask "why", "how", and "what if" questions

// Supports diagrams, equations, and examples in responses

// Detects repeated confusion and suggests revision automatically

// 4. Teacher & Institution Dashboard

// View individual and class-level learning analytics

// Identify slow learners and high performers

// Track chatbot usage and frequently asked doubts

// Get Al-generated insights on topic difficulty levels

// 5. Multilingual & Inclusive Design

// Support English, Hindi, and regional languages

// Simple UI for school students and first-time digital learners

// Optimized for mobile devices and low internet bandwidth

// Target Users

// School students (Classes 6-12)

// College and undergraduate students

// Teachers and academic institutions

// EdTech startups and training institutes

// Al & Technology Expectations

// Machine Learning models for student profiling


// NLP-based Al chatbot using LLMs

// Recommendation systems for personalized content

// Learning analytics and predictive performance modeling

// Expected Deliverables

// Functional prototype of the learning platform

// Al chatbot capable of syllabus-aware doubt resolution

// Student and teacher dashboards

// Technical documentation explaining Al models and system architecture

// Final presentation demonstrating learning personalization and chatbot intelligence

const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const topicRoutes = require("./routes/topicRoutes");
const quizRoutes = require("./routes/quizRoutes");
const notesRoutes = require("./routes/notesRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
const studentProgressRoutes = require("./routes/studentProgressRoutes");

const app = express();

const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/SKIPS").then(()=>{
    console.log("Connected to MongoDB");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/topics",topicRoutes)
app.use("/quizzes", quizRoutes);
app.use("/notes", notesRoutes);
app.use("/lectures", lectureRoutes);
app.use("/progress", studentProgressRoutes);

//folder structure
// - server.js
// - models
//    - student.js
//    - teacher.js
//    - content.js
// - routes
//    - studentRoutes.js
//    - teacherRoutes.js
//    - contentRoutes.js
// - controllers
//    - studentController.js
//    - teacherController.js
//    - contentController.js
// - services
//    - chatbotService.js
//    - recommendationService.js
// - utils
//    - alModels.js
//    - dataProcessing.js   

