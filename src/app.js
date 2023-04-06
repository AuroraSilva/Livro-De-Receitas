require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());
mongoDB.connect();



module.exports = app;