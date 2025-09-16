import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateTokens } from "../utils/generateTokens.js";

export const registerUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, Number(process.env.BCRYPT_SALT_ROUNDS));
  const user = await User.create({ ...data, password: hashedPassword });
  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const tokens = generateTokens(user);
  return { user, ...tokens };
};
