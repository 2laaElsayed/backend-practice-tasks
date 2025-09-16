import express from "express";
import {
  createProductController,
  getProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} from "../controller/product.controller.js";
import { verifyToken, allowTo } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, allowTo("admin", "user"), createProductController);
router.get("/", verifyToken, getProductsController);
router.get("/:id", verifyToken, getProductByIdController);
router.patch("/:id", verifyToken, allowTo("admin"), updateProductController);
router.delete("/:id", verifyToken, allowTo("admin"), deleteProductController);

export default router;
