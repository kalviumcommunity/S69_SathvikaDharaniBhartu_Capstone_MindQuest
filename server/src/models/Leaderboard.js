const mongoose = require('mongoose');

const leaderBoardSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model("LeaderBoard", leaderBoardSchema);