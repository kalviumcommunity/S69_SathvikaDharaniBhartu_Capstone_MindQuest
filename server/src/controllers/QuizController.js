const Quiz = require("../models/Quiz");

// POST API
exports.createQuiz = async (req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        await newQuiz.save();
        res.status(201).json({ message: "Quiz created successfully!", quiz: newQuiz });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find()
        .populate("questions user submissions");
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id)
        .populate("questions user submissions");
        res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
