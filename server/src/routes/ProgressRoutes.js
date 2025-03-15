const express = require("express");
const router = express.Router();
const ProgressController = require("../controllers/ProgressController");

router.get("/:userId", ProgressController.getUserProgress);

module.exports = router;
