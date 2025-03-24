const Submission = require("../models/Submission.js"); 

exports.createSubmission = async (req, res) => {
    try {
        const newSubmission = new Submission(req.body);
        await newSubmission.save();
        res.status(201).json({ message: "Submission recorded successfully!", submission: newSubmission });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getAllSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find()
        .populate("user relatedId"); 
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// GET API
exports.getSubmissionsByUserId = async (req, res) => {
    try {
        const submissions = await Submission.find({ userId: req.params.id })
        .populate("user relatedId");
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSubmission = async (req, res) => {
    try {
        const updatedSubmission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedSubmission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSubmission = async (req, res) => {
    try {
        await Submission.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Submission deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
