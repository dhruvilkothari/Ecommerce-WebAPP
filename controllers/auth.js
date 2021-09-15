const User = require("../models/user");
exports.createOrUpdateUser = async (req, res) => {
  // console.log(req.user);
  const { name, picture, email } = req.user;
  try {
    const user = await User.findOneAndUpdate(
      { email: email },
      { name: name, picture: picture },
      { new: true }
    );
    if (user) {
      // console.log("In Auth js line controller line11", user);
      return res.json(user);
    } else {
      const newUser = await User({
        email: email,
        name: name,
        picture: picture,
      }).save();
      // console.log("In Auth js line controller line19", newUser);
      res.json(newUser);
    }
  } catch (errr) {
    console.log("In Create Or Update User Authjs line 21", errr);
    toastr.error(err.message);
  }
};
