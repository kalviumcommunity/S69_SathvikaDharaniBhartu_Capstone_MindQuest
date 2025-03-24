const Notification = require("../models/Notification");

// GET API
exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find()
        .populate("user");
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
