import jwt from "jsonwebtoken";

export const generateTokens = (userId, email, role) => {
  const accessToken = jwt.sign(
    { userId, email, role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_TTL || "15m" }
  );

  const refreshToken = jwt.sign(
    { userId, email, role },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_TTL || "7d" }
  );

  return { accessToken, refreshToken };
};
