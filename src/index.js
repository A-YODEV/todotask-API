const express = require("express");
const connect = require("./config/database");
const { json } = require("express");
const todotasks = require("./controllers/todotaskController");
const models = require("./models/Todotask");
const todotaskRoutes = require("./routes/todotaskRoute");

connect();

const app = express();

app.use(json());

app.use("/todotask", todotaskRoutes);

const port = process.env.PORT || 1002;

app.get("/", (req, res) => {
  res.send("Todo Task API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
