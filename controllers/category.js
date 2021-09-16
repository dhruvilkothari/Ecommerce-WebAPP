const Category = require("../models/category");
const slugify = require("slugify");

exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await new Category({
      name,
      slug: slugify(name),
    }).save();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Category failed: " + err.message);
  }
};
exports.list = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ createdAt: -1 }).exec();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.read = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const category = await Category.findOne({ slug: slug }).exec();
    res.json(category);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};
exports.update = async (req, res, next) => {};
exports.remove = async (req, res, next) => {
  const slug = req.params.slug;
  try {
    const category = await Category.findOneAndDelete({ slug: slug }).exec();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(400).send("Category delete failed");
  }
};
