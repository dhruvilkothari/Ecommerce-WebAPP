const router = require("express").Router();
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

// middlelwares
const { authCheck, adminCheck } = require("../middleware/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
