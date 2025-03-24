const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/", CommentController.createComment); 
router.get("/post/:postId", CommentController.getCommentsByPost);  // GET API
router.put("/:id", CommentController.updateComment); 
router.delete("/:id", CommentController.deleteComment); 

module.exports = router;
