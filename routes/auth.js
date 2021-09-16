const router = require("express").Router();

const { createOrUpdateUser, currentUser } = require("../controllers/auth");
const { authCheck, adminCheck } = require("../middleware/auth");
// import middleware

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
