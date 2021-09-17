const mongoose = require("mongoose");
const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      trim: true,
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sub", subSchema);
