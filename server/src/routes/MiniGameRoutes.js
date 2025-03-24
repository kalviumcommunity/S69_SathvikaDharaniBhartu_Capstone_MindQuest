const express = require("express");
const router = express.Router();
const MiniGameController = require("../controllers/MiniGameController");

router.post("/", MiniGameController.createMiniGame); // POST API
router.get("/", MiniGameController.getAllMiniGames); // GET API
router.get("/:id", MiniGameController.getMiniGameById); // GET API
router.put("/:id", MiniGameController.updateMiniGame); // PUT API
router.delete("/:id", MiniGameController.deleteMiniGame);

module.exports = router;
