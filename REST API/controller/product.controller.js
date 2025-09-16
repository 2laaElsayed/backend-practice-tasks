import { handleError } from "../middleware/handleError.middleware.js";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../service/product.service.js";

export const createProductController = handleError(async (req, res) => {
  const product = await createProduct(req.body, req.user.id);
  res.status(201).json(product);
});

export const getProductsController = handleError(async (req, res) => {
  const products = await getProducts();
  res.status(200).json(products);
});

export const getProductByIdController = handleError(async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
});

export const updateProductController = handleError(async (req, res) => {
  const product = await updateProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
});

export const deleteProductController = handleError(async (req, res) => {
  const product = await deleteProduct(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json({ message: "Product deleted successfully" });
});
