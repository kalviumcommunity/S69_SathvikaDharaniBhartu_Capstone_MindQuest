const FileUpload = require("../models/FileUpload");

exports.uploadFile = async (req, res) => {
    try {
        const newFile = new FileUpload(req.body);
        await newFile.save();
        res.status(201).json({ message: "File uploaded successfully!", file: newFile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteFile = async (req, res) => {
    try {
        await FileUpload.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
