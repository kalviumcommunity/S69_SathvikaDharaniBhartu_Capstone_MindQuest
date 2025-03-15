const express = require("express");
const router = express.Router();
const KnowledgeController = require("../controllers/KnowledgeController");

router.post("/", KnowledgeController.createKnowledge);

module.exports = router;
