const router = require("express").Router();

router.get("/user", (req, res) => {
  res.json({ data: "Hey you hit the user route" });
});

module.exports = router;
