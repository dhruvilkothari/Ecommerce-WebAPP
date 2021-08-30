const router = require("express").Router();
const { createOrUpdateUser } = require("../controllers/authControllers");

// middlewar
const { authCheck } = require("../middleware/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
