import express from "express";
import { registerController, loginController } from "../../controller/auth.controller.js";
import { registerValidator } from "../../validation/register.valid.js";
import expressValidatorMiddleware from "../../middleware/expressValidator.middleware.js";

const router = express.Router();

router.post("/register", registerValidator, expressValidatorMiddleware, registerController);
router.post("/login", loginController);

export default router;
