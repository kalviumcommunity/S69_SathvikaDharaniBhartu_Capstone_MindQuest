const mongoose = require('mongoose');

const miniGameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: { 
        type: String, 
        enum: ["easy", "medium", "hard"], 
        required: true 
    },
    leaderboard: [{type: mongoose.Schema.Types.ObjectId, ref: "LeaderBoard"}],
    progress: [{type: mongoose.Schema.Types.ObjectId, ref: "Progress"}],
    submission: [{type: mongoose.Schema.Types.ObjectId, ref: "Submission"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timestamps: true});

module.exports = mongoose.model("MiniGame", miniGameSchema);