const router = require("express").Router();
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

// middlelwares
const { authCheck } = require("../middleware/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);

module.exports = router;
