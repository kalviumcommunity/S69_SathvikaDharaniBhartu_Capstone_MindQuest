const Knowledge = require("../models/Knowledge");


exports.createKnowledge = async (req, res) => {
    try {
        const newKnowledge = new Knowledge(req.body);
        await newKnowledge.save();
        res.status(201).json({ message: "Knowledge entry created successfully!", knowledge: newKnowledge });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET API
exports.getAllKnowledge = async (req, res) => {
    try {
        const knowledgeEntries = await Knowledge.find()
        .populate("fileuploads user");
        res.status(200).json(knowledgeEntries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET API
exports.getKnowledgeById = async (req, res) => {
    try {
        const knowledgeEntry = await Knowledge.findById(req.params.id)
        .populate("fileuploads user");
        if (!knowledgeEntry) return res.status(404).json({ message: "Knowledge entry not found" });
        res.status(200).json(knowledgeEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
