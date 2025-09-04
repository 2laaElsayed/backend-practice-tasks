import express from "express";
import {
  createLaptopController,
  getLaptopsController,
  getLaptopByIdController,
  updateLaptopController,
  deleteLaptopController,
} from "../controller/laptop.controller.js";
import { addCreatedAt, addUpdatedAt } from "../middleware/laptop.middleware.js";

const router = express.Router();

router.post("/laptops", addCreatedAt, createLaptopController);
router.get("/laptops", getLaptopsController);
router.get("/laptops/:id", getLaptopByIdController);
router.patch("/laptops/:id", addUpdatedAt, updateLaptopController);
router.delete("/laptops/:id", deleteLaptopController);

export default router;
