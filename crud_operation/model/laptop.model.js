import mongoose from "mongoose";

const { Schema, model } = mongoose;

const laptopSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { default: true },
  createdAt: { type: String },
  updatedAt: { type: String },
});

export default model("Laptop", laptopSchema);
