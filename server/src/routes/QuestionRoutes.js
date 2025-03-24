const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/QuestionController");

router.post("/", QuestionController.createQuestion);
router.get("/", QuestionController.getAllQuestions); // GET API

module.exports = router;
