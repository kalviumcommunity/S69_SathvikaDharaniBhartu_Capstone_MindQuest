const Technique = require("../models/Technique");

// POST API
exports.createTechnique = async (req, res) => {
    try {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to create techniques" });
        // }

        const newTechnique = new Technique(req.body);
        await newTechnique.save();
        res.status(201).json({ message: "Technique created successfully!", technique: newTechnique });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// GET API
exports.getAllTechniques = async (req, res) => {
    try {
        const techniques = await Technique.find()
        .populate("user comments fileuploads");
        res.status(200).json(techniques);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// GET API
exports.getTechniqueById = async (req, res) => {
    try {
        const technique = await Technique.findById(req.params.id)
        .populate("user comments fileuploads");
        if (!technique) return res.status(404).json({ message: "Technique not found" });

        res.status(200).json(technique);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// PUT API
exports.updateTechnique = async (req, res) => {
    try {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to update techniques" });
        // }

        const updatedTechnique = await Technique.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTechnique) return res.status(404).json({ message: "Technique not found" });

        res.status(200).json({ message: "Technique updated successfully", technique: updatedTechnique });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteTechnique = async (req, res) => {
    try {
        // if (req.user.role !== "admin") {
        //     return res.status(403).json({ message: "Unauthorized to delete techniques" });
        // }

        const deletedTechnique = await Technique.findByIdAndDelete(req.params.id);
        if (!deletedTechnique) return res.status(404).json({ message: "Technique not found" });

        res.status(200).json({ message: "Technique deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
