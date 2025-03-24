const express = require("express");
const router = express.Router();
const FileUploadController = require("../controllers/FileUploadController");

router.post("/", FileUploadController.uploadFile); //POST API
router.delete("/:id", FileUploadController.deleteFile);

module.exports = router;
