const admin = require("../firebase/index");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  // console.log("authCheck");
  // console.log(req.headers.authtoken);

  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    req.user = firebaseUser;
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: "Invalid  or expired token" });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  console.log(email);
  const adminUser = await User.findOne({ email: email }).exec();
  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin Resource.Access Denied",
    });
  } else {
    next();
  }
};
