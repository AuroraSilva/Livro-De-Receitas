const mongoose = require("mongoose");

const LOGIN = process.env.LOGIN;
const PASSWORD = process.env.PASSWORD;
const CLUSTER = process.env.CLUSTER;

const connect = async () => {
  try {
    mongoose.connect(`mongodb+srv://${LOGIN}:${PASSWORD}${CLUSTER}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  };
};

module.exports = {
    connect
  };