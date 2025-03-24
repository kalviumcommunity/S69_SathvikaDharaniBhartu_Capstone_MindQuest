const express = require("express");
const router = express.Router();
const ProgressController = require("../controllers/ProgressController");

// GET API
router.get("/:userId", ProgressController.getUserProgress);

module.exports = router;
