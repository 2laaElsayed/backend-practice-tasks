import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.config.js";
import authRoutes from "./routes/auth/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import { errorMiddleware } from "./middleware/handleError.middleware.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use(errorMiddleware);

app.listen(3000, async () => {
  await connectDB();
  console.log("tmaaammmmmmmmmmm");
});