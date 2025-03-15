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
