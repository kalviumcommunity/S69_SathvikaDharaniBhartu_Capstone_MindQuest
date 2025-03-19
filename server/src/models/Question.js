const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        enum: ["MCQ", "FillInBlank", "TrueFalse", "Coding"],
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum : ["easy", "medium", "hard"],
        required: true
    },
    quizzes: [{type: mongoose.Schema.Types.ObjectId, ref: "Quiz"}],


},{timestamps: true});


module.exports = mongoose.model("Question", questionSchema);