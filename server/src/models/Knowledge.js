const mongoose = require('mongoose');

const knowledgeSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model("Knowledge", knowledgeSchema);