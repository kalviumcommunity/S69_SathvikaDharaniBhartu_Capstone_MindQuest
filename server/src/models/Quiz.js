const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
},{timestamps: true});


module.exports = mongoose.model('Quiz', quizSchema);