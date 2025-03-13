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
},{timestamps: true});

module.exports = mongoose.model("FileUpload", fileUploadSchema);