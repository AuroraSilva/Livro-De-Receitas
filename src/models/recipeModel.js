const mongoose = require("mongoose");

const recipeModel = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name: {
            type: String,
            required: true
        },
        sections: {
            type: [Object],
            required: true
        }
    }
);

const Model = mongoose.model("recipe", recipeModel);

module.exports = Model;