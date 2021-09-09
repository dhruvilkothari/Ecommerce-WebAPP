const User = require("../models/user");
exports.createOrUpdateUser = async (req, res) => {
  const { name, email, picture } = req.user;
  const user = await User.findOneAndUpdate(
    { email: email },
    { name: name, picture: picture },
    { new: true }
  );
  if (user) {
    return res.json({ user: user });
    return;
  }
  try {
    const newUser = await new User({
      email: email,
      name: name,
      picture: picture,
    }).save();
    return res.json(newUser);
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
