const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    level: {
        type: Number,
        required: true,
        default: 1
    },
    experiencePoints: {
        type: Number,
        default: 0,
    },
    achievements: [{type: mongoose.Schema.Types.ObjectId, ref: "Achievement"}],
    minigames: [{type: mongoose.Schema.Types.ObjectId, ref: "MiniGame"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timestamps: true});

module.exports = mongoose.model("Progress", progressSchema);

