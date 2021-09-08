const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connetect to database");
  })
  .catch((err) => {
    if (err) {
      process.exit(1);
    }
  });

// midddlerware
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));
app.use(cors());

// routes
readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Connect to port: " + process.env.PORT);
});
