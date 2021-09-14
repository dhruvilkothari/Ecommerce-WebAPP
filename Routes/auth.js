const router = require("express").Router();
// controllers
const { createOrUpdateUser } = require("../controllers/auth");

// middleware
const { authCheck } = require("../middleware/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
