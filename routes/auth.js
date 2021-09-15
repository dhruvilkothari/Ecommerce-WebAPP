const router = require("express").Router();

const { createOrUpdateUser } = require("../controllers/auth");

router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
