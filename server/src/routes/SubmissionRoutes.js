const express = require("express");
const router = express.Router();
const SubmissionController = require("../controllers/SubmissionController"); 

router.post("/submissions", SubmissionController.createSubmission); // POST API
router.get("/submissions", SubmissionController.getAllSubmissions); // GET API
router.get("/submissions/:id", SubmissionController.getSubmissionsByUserId); // GET API
router.put("/submissions/:id", SubmissionController.updateSubmission); // PUT API
router.delete("/submissions/:id", SubmissionController.deleteSubmission);

module.exports = router;
