const admin = require("../firebase/index");

exports.authCheck = async (req, res, next) => {
  // console.log("IN MIDDLEWARE AUTH ---->", req.headers);

  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("IN MIDDLEWARE AUTH  Line 7---->", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (e) {
    console.log("IN MIDDLEWARE AUTH.jS line 7", e);
    res.status(401).json({ err: "INVALID OR EXPIRED TOKEN" });
  }
};
