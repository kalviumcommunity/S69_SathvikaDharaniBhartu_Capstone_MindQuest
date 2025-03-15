const express = require("express");
const router = express.Router();
const FileUploadController = require("../controllers/FileUploadController");

router.post("/", FileUploadController.uploadFile);
router.delete("/:id", FileUploadController.deleteFile);

module.exports = router;
