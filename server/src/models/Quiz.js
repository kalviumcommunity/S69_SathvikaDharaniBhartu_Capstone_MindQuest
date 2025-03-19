const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: "Question"}],
    submission: [{type: mongoose.Schema.Types.ObjectId, ref: "Submission"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timestamps: true});


module.exports = mongoose.model('Quiz', quizSchema);