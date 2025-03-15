const express = require("express");
const router = express.Router();
const TechniqueController = require("../controllers/TechniqueController");

router.post("/", TechniqueController.createTechnique);
router.get("/", TechniqueController.getAllTechniques);
router.get("/:id", TechniqueController.getTechniqueById);
router.put("/:id", TechniqueController.updateTechnique);
router.delete("/:id", TechniqueController.deleteTechnique);

module.exports = router;
