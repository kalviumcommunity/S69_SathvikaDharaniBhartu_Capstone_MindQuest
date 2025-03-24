const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json({ message: "Question created successfully!", question: newQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find()
        .populate("quizzes");
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
