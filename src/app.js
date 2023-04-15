require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());
mongoDB.connect();

app.get("/", (req, res) => {
    return res.send({ msg: "Boas-vindas ao seu livro de receitas" })
});

const recipeRoutes = require("./routes/recipesRoutes");
app.use("/receita", recipeRoutes);

module.exports = app;