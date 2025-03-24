const express = require("express");
const router = express.Router();
const SubmissionController = require("../controllers/SubmissionController"); 

router.post("/submissions", SubmissionController.createSubmission);
router.get("/submissions", SubmissionController.getAllSubmissions); // GET API
router.get("/submissions/:id", SubmissionController.getSubmissionsByUserId); // GET API
router.put("/submissions/:id", SubmissionController.updateSubmission);
router.delete("/submissions/:id", SubmissionController.deleteSubmission);

module.exports = router;
