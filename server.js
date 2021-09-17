// all imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const fs = require("fs");
const app = express();

// importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const subRoutes = require("./routes/sub");

// db
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    if (err) {
      console.log(`Canncot connect to db ${err.message}`);
      process.exit(1);
    }
  });

// console.log(process.env);

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));

// importing  and using routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", subRoutes);
//listen to server

app.listen(process.env.PORT, () => {
  console.log("Connected to backend ", 8000);
});
