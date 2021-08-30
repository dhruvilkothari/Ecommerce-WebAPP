const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// database
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(`Db Connection Err: ${err.message}`);
  });
// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// import Routes
// const authRoutes = require("../server/routes/auth");
// app.use("/api", authRoutes);
readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
