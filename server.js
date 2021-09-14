// all imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();
const authRoutes = require("./Routes/auth");

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

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));

// importing  and using routes
// readdirSync("./Routes").map((r) => {
//   app.use("/api", require(`./Routes/${r}`));
// });
app.use("/api", authRoutes);

//listen to server

app.listen(process.env.PORT, () => {
  console.log("Connected to backend ", 8000);
});
