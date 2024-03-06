const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const { connectToDatabase } = require("./db/conn.js");
const routes = require("./routes/api/animals.js");

const port = process.env.port || 3000;

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/animals", routes);

connectToDatabase();
app.get("/", (req, res) => {
  res.send("Server connected.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
