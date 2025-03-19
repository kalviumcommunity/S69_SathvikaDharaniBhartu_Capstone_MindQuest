const mongoose = require('mongoose');

const leaderBoardSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
    },
    minigames: [{type: mongoose.Schema.Types.ObjectId, ref: "MiniGame"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timestamps: true});

module.exports = mongoose.model("LeaderBoard", leaderBoardSchema);