const controller = require("../controllers/recipesController");
const express = require("express");

const route = express.Router();

route.post("/originalDB", controller.originalDB);

module.exports = route;