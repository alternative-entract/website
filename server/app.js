require('dotenv').config()
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const connectDB = require('./dataBase/connect');

//base de données

// Routes

// Middlewares


app.use(morgan("tiny"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("ApproAlternative site start");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();