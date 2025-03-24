const MiniGame = require("../models/MiniGame");


exports.createMiniGame = async (req, res) => {
    try {
        //  if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to create mini-games" });
        // }

        const newGame = new MiniGame(req.body);
        await newGame.save();
        res.status(201).json({ message: "Mini-game created successfully!", game: newGame });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getAllMiniGames = async (req, res) => {
    try {
        const games = await MiniGame.find()
        .populate("leaderboard progress submission user");
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// GET API
exports.getMiniGameById = async (req, res) => {
    try {
        const game = await MiniGame.findById(req.params.id)
        .populate("leaderboard progress submission user");
        if (!game) return res.status(404).json({ message: "Mini-game not found" });

        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateMiniGame = async (req, res) => {
    try {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to update mini-games" });
        // }

        const updatedGame = await MiniGame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGame) return res.status(404).json({ message: "Mini-game not found" });

        res.status(200).json({ message: "Mini-game updated successfully", game: updatedGame });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteMiniGame = async (req, res) => {
    try {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to delete mini-games" });
        // }

        const deletedGame = await MiniGame.findByIdAndDelete(req.params.id);
        if (!deletedGame) return res.status(404).json({ message: "Mini-game not found" });

        res.status(200).json({ message: "Mini-game deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
