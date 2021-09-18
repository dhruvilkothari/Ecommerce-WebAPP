const router = require("express").Router();

const { create, read } = require("../controllers/product");
const { authCheck, adminCheck } = require("../middleware/auth");
// import middleware

router.post("/product", authCheck, adminCheck, create);
router.get("/products", read);

module.exports = router;
