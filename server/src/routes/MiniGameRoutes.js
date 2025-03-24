const express = require("express");
const router = express.Router();
const MiniGameController = require("../controllers/MiniGameController");

router.post("/", MiniGameController.createMiniGame);
router.get("/", MiniGameController.getAllMiniGames); // GET API
router.get("/:id", MiniGameController.getMiniGameById); // GET API
router.put("/:id", MiniGameController.updateMiniGame);
router.delete("/:id", MiniGameController.deleteMiniGame);

module.exports = router;
