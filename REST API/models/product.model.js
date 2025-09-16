import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 100 },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, maxlength: 500 },
    inStock: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
