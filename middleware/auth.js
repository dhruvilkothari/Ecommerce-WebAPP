const admin = require("../firebase/index");

exports.authCheck = async (req, res, next) => {
  // console.log("authCheck");
  console.log(req.headers.authtoken);
  next();
  // try {
  //   const firebaseUser = await admin
  //     .auth()
  //     .verifyIdToken(req.headers.authtoken);
  //   req.user = firebaseUser;
  //   next();
  // } catch (err) {
  //   res.status(401).json({ err: "Invalid  or expired token" });
  // }
};
