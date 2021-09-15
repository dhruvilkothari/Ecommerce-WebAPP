const router = require("express").Router();

const { createOrUpdateUser } = require("../controllers/auth");
const { authCheck } = require("../middleware/auth");
// import middleware

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
