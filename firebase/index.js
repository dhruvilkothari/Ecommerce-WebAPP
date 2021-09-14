var admin = require("firebase-admin");

var serviceAccount = require("../config/eccomerce-website-firebase-adminsdk-y5ykk-2987a36f9d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
