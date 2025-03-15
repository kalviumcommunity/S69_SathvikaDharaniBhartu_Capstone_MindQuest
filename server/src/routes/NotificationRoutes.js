const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/NotificationController");

router.get("/", NotificationController.getAllNotifications);

module.exports = router;
