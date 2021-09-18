const router = require("express").Router();

const { create } = require("../controllers/product");
const { authCheck, adminCheck } = require("../middleware/auth");
// import middleware

router.post("/product", authCheck, adminCheck, create);

module.exports = router;
