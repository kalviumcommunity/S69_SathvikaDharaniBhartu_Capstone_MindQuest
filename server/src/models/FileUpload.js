const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    knowledge: [{type: mongoose.Schema.Types.ObjectId, ref: "Knowledge"}],
    technique: [{type: mongoose.Schema.Types.ObjectId, ref: "Technique"},]
},{timestamps: true});

module.exports = mongoose.model("FileUpload", fileUploadSchema);