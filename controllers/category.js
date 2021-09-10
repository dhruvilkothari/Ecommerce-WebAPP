const slugify = require("slugify");
const Category = require("../models/category");

exports.create = async function (req, res, next) {
  try {
    const { name } = req.body;
    const category = await new Category({
      name: name,
      slug: slugify(name),
    }).save();
    res.json(category);
  } catch (err) {
    // console.log("In Category controller", err);
    res.status(400).send("Create Category failed");
  }
};
exports.read = async function (req, res, next) {
  let category = await Category.findOne({ slug: req.params.slug }).exec();
  res.json(category);
};
exports.update = async function (req, res, next) {
  try {
    const { name } = req.body;
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name: name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {}
};
exports.remove = async function (req, res, next) {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json("deleted");
  } catch (err) {
    res.json({ error: err.message });
  }
};
exports.list = async function (req, res, next) {
  try {
    const category = await Category.find({}).sort({ createdAt: -1 }).exec();
    res.json(category);
  } catch (err) {}
};
