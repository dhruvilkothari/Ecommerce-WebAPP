const router = require("express").Router();

router.get("/user", (req, res) => {
  res.json({
    data: "user",
  });
});

module.exports = router;
