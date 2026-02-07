const mongoose = require("mongoose")
const Schema = mongoose.Schema; 
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    subjectOfTaught: [{
        type: String,
        required: true
    }],
    profilePhotoUrl: {
        type: String,
        required: true
    },
    contactNumber: {   
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Teacher", teacherSchema);  