const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/QuizController");

router.post("/", QuizController.createQuiz); 
router.get("/", QuizController.getAllQuizzes); 
router.delete("/:id", QuizController.deleteQuiz); 

module.exports = router;
