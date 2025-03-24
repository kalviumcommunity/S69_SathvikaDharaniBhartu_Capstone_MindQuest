const Comment = require("../models/Comment");

// POST API
exports.createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json({ message: "Comment added!", comment: newComment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId })
        .populate("user technique quiz submission"); 
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// PUT API
exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to edit this comment" });
        }

        comment.text = req.body.text || comment.text;
        await comment.save();

        res.status(200).json({ message: "Comment updated successfully", comment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        
        if (comment.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized to delete this comment" });
        }

        await comment.deleteOne();
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
