import Product from "../models/product.model.js";

export const createProduct = async (data, userId) => {
  return await Product.create({ ...data, createdBy: userId });
};

export const getProducts = async () => {
  return await Product.find().populate("createdBy", "name email");
};

export const getProductById = async (id) => {
  return await Product.findById(id).populate("createdBy", "name email");
};

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
