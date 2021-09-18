const Product = require("../models/product");
const slugify = require("slugify");
exports.create = async (req, res, next) => {
  try {
    // console.log(req.body);
    const identical = await Product.findOne({
      slug: slugify(req.body.title),
    }).exec();
    if (identical) {
      return res.status(400).json({
        err: `The ${req.body.title} is already present int the inventoy`,
      });
      return;
    }

    req.body.slug = slugify(req.body.title);
    const newProuct = await new Product(req.body).save();
    res.json(newProuct);
  } catch (err) {
    console.log(err, "IN Product Controller line 6");
    // res.status(400).send("Product Create failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.read = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};
