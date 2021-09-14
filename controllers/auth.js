const User = require("../models/user");
exports.createOrUpdateUser = async (req, res, next) => {
  try {
    const { name, email, picture } = req.user;
    const user = await User.findOneAndUpdate(
      { email: email },
      { name, picture },
      { new: true }
    );
    if (user) {
      // console.log(user);
      return res.json(user);
    } else {
      const newUser = await User({
        name,
        email,
        picture,
      }).save();
      // console.log(newUser);
      res.json(newUser);
    }
  } catch (err) {}
};
