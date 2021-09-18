const Product = require("../models/product");
const slugify = require("slugify");
exports.create = async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProuct = await new Product(req.body).save();
    res.json(newProuct);
  } catch (err) {
    console.log(err, "IN Product Controller line 6");
    res.status(400).send("Product Create failed");
  }
};
