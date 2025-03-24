const express = require("express");
const router = express.Router();
const TechniqueController = require("../controllers/TechniqueController");

router.post("/", TechniqueController.createTechnique); // POST API
router.get("/", TechniqueController.getAllTechniques); // GET API
router.get("/:id", TechniqueController.getTechniqueById); // GET API
router.put("/:id", TechniqueController.updateTechnique);
router.delete("/:id", TechniqueController.deleteTechnique);

module.exports = router;
