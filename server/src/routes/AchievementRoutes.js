const express = require("express");
const router = express.Router();
const AchievementController = require("../controllers/AchievementController");

// GET API
router.get("/", AchievementController.getAllAchievements); 

module.exports = router;
