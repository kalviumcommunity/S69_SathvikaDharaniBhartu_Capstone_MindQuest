const mongoose = require('mongoose')

const techniqueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
},{timestamps: true});


module.exports = mongoose.model('Technique', techniqueSchema);