import express from "express";
import connectDB from "./config/mongodb.config.js";
import laptopRoutes from "./routes/laptop.routes.js";
import dotenv from "dotenv"
dotenv.config()
const app = express();

app.use(express.json());

app.use("/api", laptopRoutes);

app.listen(3000, async () => {
  await connectDB();
  console.log("tmaaammmmmmmmmmm");
});
