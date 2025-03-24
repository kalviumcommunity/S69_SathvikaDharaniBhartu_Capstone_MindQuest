const express = require("express");
const router = express.Router();
const KnowledgeController = require("../controllers/KnowledgeController");

router.post("/", KnowledgeController.createKnowledge); // POST API
router.get("/", KnowledgeController.getAllKnowledge); // GET API
router.get("/:id", KnowledgeController.getKnowledgeById); // GET API
module.exports = router;
