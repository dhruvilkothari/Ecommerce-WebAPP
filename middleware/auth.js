const admin = require("../firebase/index");

exports.authCheck = (req, res, next) => {
  console.log("IN MIDDLEWARE AUTH ---->", req.headers);
  next();
};
