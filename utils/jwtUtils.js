const jwt = require("jsonwebtoken");

const generateToken = (student) => {
    return jwt.sign(
        {
            id: student._id,
            email: student.email
        },
        "skips_secret_key",   
        { expiresIn: "7d" }
    );
};

module.exports = { generateToken };
