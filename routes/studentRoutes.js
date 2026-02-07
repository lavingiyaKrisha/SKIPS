const router = require('express').Router();
const upload = require("../middleware/upload");
const studentController = require("../controller/studentController");
const verifyToken = require("../middleware/authMiddleware");

// router.post("/", studentController.CreateStudent);
router.post("/", upload.single("profilePhotoUrl"), studentController.CreateStudent);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/login", studentController.loginStudent);
// router.get("/",verifyToken, studentController.getAllStudents);
// router.get("/:id",verifyToken, studentController.getStudentById);

module.exports = router;




