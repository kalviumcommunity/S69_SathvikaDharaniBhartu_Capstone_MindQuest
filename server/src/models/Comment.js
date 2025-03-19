const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    quiz: [{type: mongoose.Schema.Types.ObjectId, ref: "Quiz"}],
    submission: [{type: mongoose.Schema.Types.ObjectId, ref: "Submission"}],
    technique: [{type: mongoose.Schema.Types.ObjectId, ref: "Technique"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timestamps: true});

module.exports = mongoose.model("Comment", commentSchema);