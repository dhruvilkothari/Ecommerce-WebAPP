const router = require("express").Router();

router.get("/user", (req, res, next) => {
  res.json({
    data: "Hey u user",
  });
});

module.exports = router;
