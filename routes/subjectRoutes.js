const router = require("express").Router();
const {
  createSubject,
  getAllSubjects,
  getSubjectById,
  getFullSubjectContent
} = require("../controller/subjectController");

router.post("/create", createSubject);
router.get("/", getAllSubjects);
router.get("/:id", getSubjectById);
router.get("/:subjectId/content", getFullSubjectContent);

module.exports = router;
