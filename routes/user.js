const router = require("express").Router();

router.get("/user", (req, res) => {
  res.json({ data: "Hey U hit user" });
});

module.exports = router;
