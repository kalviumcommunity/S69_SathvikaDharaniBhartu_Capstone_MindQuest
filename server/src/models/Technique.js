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
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    fileuploads: [{type: mongoose.Schema.Types.ObjectId, ref: "FileUpload"}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{timestamps: true});


module.exports = mongoose.model('Technique', techniqueSchema);