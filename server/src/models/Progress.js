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
},{timestamps: true});

module.exports = mongoose.model("Progress", progressSchema);

