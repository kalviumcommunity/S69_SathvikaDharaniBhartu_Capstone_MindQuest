const express = require("express");
const router = express.Router();
const LeaderboardController = require("../controllers/LeaderboardController");

// GET API
router.get("/", LeaderboardController.getLeaderboard);

module.exports = router;
