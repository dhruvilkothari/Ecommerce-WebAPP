const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      maxlength: 32,
      text: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },

    price: {
      type: Number,
      required: true,
      trim: true,
      maxLength: 32,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    // subs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Sub",
    //   },
    // ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    // images: {
    //   type: Array,
    // },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "White", "Blue"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "HP", "ASUS"],
    },
    // raings: [
    //   {
    //     star: Number,
    //     postedBy: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
