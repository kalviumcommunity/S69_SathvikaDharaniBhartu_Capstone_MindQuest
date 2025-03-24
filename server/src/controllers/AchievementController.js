const Achievement = require("../models/Achievement");

// GET API
exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find()
        .populate("user");
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
