const User = require("../models/User");

// POST API
exports.createUser = async(req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({message: "User created successfully!", user: newUser});
    } catch(error){
        res.status(400).json({error: error.message});
    }
};


// GET API
exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        .populate("achievements")
        .populate("comments")
        .populate("leaderboard")
        .populate("minigames")
        .populate("notifications")
        .populate("progress")
        .populate("quizzes")
        .populate("submission")
        .populate("technique");
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({ error: error.message});
    }
};


// GET API
exports.getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        .populate("achievements")
            .populate("comments")
            .populate("leaderboard")
            .populate("minigames")
            .populate("notifications")
            .populate("progress")
            .populate("quizzes")
            .populate("submission")
            .populate("technique");
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};


// PUT API
exports.updateUser = async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({message: "User updated successfully", user: updatedUser});
    }catch(error) {
        res.status(400).json({error: error.message});
    }
};


exports.deleteUser = async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({message: "User deleted successfully"});
    } catch(error){
        res.status(500).json({error: error.message});
    }
};