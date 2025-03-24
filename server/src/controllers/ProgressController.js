const Progress = require("../models/Progress");


// GET API
exports.getUserProgress = async (req, res) => {
    try {
        const progress = await Progress.findOne({ userId: req.params.userId })
        .populate("user achievements minigames");
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
