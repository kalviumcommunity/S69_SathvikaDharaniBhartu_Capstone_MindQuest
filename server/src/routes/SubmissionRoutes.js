const express = require("express");
const router = express.Router();
const SubmissionController = require("../controllers/SubmissionController"); 

router.post("/submissions", SubmissionController.createSubmission);
router.get("/submissions", SubmissionController.getAllSubmissions);
router.get("/submissions/:id", SubmissionController.getSubmissionsByUserId);
router.put("/submissions/:id", SubmissionController.updateSubmission);
router.delete("/submissions/:id", SubmissionController.deleteSubmission);

module.exports = router;
