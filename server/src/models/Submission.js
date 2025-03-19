const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["quiz", "mini-game", "challenge"],
        required: true
    },
    relatedId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    answers: {
        type: Array,
        default: []
    },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    relatedId: [{type: mongoose.Schema.Types.ObjectId, required: true}] // Quizzes or MiniGames
},{timestamps: true});


module.exports = mongoose.model('Submission', submissionSchema);