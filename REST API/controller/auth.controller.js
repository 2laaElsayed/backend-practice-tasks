import { registerUser, loginUser } from "../service/auth.service.js";
import { handleError } from "../middleware/handleError.middleware.js";

export const registerController = handleError(async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json(user);
});

export const loginController = handleError(async (req, res) => {
  const { email, password } = req.body;
  const data = await loginUser(email, password);
  res.status(200).json(data);
});
