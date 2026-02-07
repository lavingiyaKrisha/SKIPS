const studentModel = require("../model/student");
const bcrypt = require("bcrypt");
const { uploadTocloudinary } = require("../utils/cloudinaryUtils");
const { mailSend } = require("../utils/mailUtils");
const {generateToken} = require("../utils/jwtUtils");


// CREATE STUDENT
const CreateStudent = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const existingStudent = await studentModel.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        let imageUrl = "";

        if (req.file) {
            const result = await uploadTocloudinary(req.file.path);
            imageUrl = result.secure_url;
        }
        else {
            return res.status(400).json({
                message: "Profile photo is required"
            });
        }

        const savedStudent = await studentModel.create({
            ...req.body,
            password: hashedPassword,
            profilePhotoUrl: imageUrl
        });

        // Send Welcome Mail
        await mailSend(
            savedStudent.email,
            "Welcome to SKIPS 🎓",
            `Hello ${savedStudent.name}, your account has been created successfully!`
        );

        return res.status(201).json({
            message: "Student created successfully",
            data: savedStudent
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};


// GET ALL STUDENTS
const getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.find();
        return res.status(200).json({
            message: "Students retrieved successfully",
            data: students
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};


// GET STUDENT BY ID
const getStudentById = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            message: "Student retrieved successfully",
            data: student
        });

    } catch (err) {
        return res.status(400).json({
            message: "Invalid ID",
            error: err.message
        });
    }
};

//login Student
const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const student = await studentModel.findOne({ email });

        if (!student) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const token = generateToken(student._id);

        return res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};


module.exports = {
    CreateStudent,
    getAllStudents,
    getStudentById,
    loginStudent
};
