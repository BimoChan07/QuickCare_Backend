import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isLogin = (Request, Response, NextFunction) => {
  try {
    const token = extractTokenFromHeader(req);
    if (!token) {
      return res
        .status(401)
        .json({ ERR: "you are not authorized to access this route" });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;

    return next();
  } catch (err) {
    res.status(401).json({
      ERR: "Something terrible happened during token verification!",
      message: err,
    });
  }
};

// Function that will extract token from header
const extractTokenFromHeader = (AuthRequest) => {
  const [type, token] = request.headers.authorization?.split(" ") ?? [];
  return type === "Bearer" ? token : undefined;
};