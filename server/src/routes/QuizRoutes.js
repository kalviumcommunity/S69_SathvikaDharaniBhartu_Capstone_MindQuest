const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/QuizController");

router.post("/", QuizController.createQuiz); // POST API
router.get("/", QuizController.getAllQuizzes);  // GET API
router.delete("/:id", QuizController.deleteQuiz); 

module.exports = router;
