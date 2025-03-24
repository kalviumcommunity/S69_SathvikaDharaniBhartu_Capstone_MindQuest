const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/", CommentController.createComment); // POST API
router.get("/post/:postId", CommentController.getCommentsByPost);  // GET API
router.put("/:id", CommentController.updateComment); // PUT API
router.delete("/:id", CommentController.deleteComment); 

module.exports = router;
