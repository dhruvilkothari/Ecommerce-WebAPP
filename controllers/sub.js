const Sub = require("../models/sub");
const slugify = require("slugify");

exports.create = async (req, res, next) => {
  try {
    const { name, parent } = req.body;
    // console.log(req.body);
    const sub = await new Sub({
      name,
      parent,
      slug: slugify(name),
    }).save();
    res.json(sub);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Sub failed: " + err.message);
  }
};
exports.list = async (req, res, next) => {
  try {
    const subs = await Sub.find({}).sort({ createdAt: -1 }).exec();
    res.json(subs);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.read = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const sub = await Sub.findOne({ slug: slug }).exec();
    res.json(sub);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};
exports.update = async (req, res, next) => {
  const slug = req.params.slug;
  try {
    const { name, parent } = req.body;
    const updated = await Sub.findOneAndUpdate(
      { slug: slug },
      { name: name, slug: slugify(name), parent },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Sub update failed");
  }
};
exports.remove = async (req, res, next) => {
  const slug = req.params.slug;
  try {
    const deleted = await Sub.findOneAndDelete({ slug: slug }).exec();
    if (!deleted) {
      return res.status(404).json({ err: "Sub Not found" });
    }
    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).send("Category delete failed");
  }
};
