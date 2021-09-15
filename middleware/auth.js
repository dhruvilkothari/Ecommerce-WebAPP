const admin = require("../firebase/index");

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
