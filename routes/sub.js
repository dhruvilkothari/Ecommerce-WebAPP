const router = require("express").Router();

const { create, read, update, remove, list } = require("../controllers/sub");
const { authCheck, adminCheck } = require("../middleware/auth");
// import middleware

router.post("/sub", authCheck, adminCheck, create);
router.get("/subs", list);
router.get("/sub/:slug", read);
router.put("/sub/:slug", authCheck, adminCheck, update);
router.delete("/sub/:slug", authCheck, adminCheck, remove);

module.exports = router;
