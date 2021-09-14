const router = require("express").Router();

router.get("/create-or-update-user", (req, res) => {
  res.json({
    data: "You hit the node api",
  });
});

module.exports = router;
