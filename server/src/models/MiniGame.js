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
},{timestamps: true});

module.exports = mongoose.model("MiniGame", miniGameSchema);