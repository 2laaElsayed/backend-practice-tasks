import mongoose from "mongoose";

const { Schema, model } = mongoose;

const laptopSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true } 
);

export default model("Laptop", laptopSchema);
