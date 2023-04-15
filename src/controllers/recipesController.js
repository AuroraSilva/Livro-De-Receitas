const recipeModel = require("../models/recipeModel");

const DEV_PASSWORD = process.env.DEV_PASSWORD;

const originalDB = async (req, res) => {
    try {
        const { devPassword } = req.body;
        if (!devPassword || devPassword != DEV_PASSWORD) return res.status(404).json({ msg: "Page not found" });

    }
    catch {
        res.status(500).json(error.message);
    }
};

module.exports = {
    originalDB
};