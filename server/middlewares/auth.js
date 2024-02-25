import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

//auth
export const auth = async (req, res, next) => {
    const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    const expirationTime = new Date(decoded.expiresIn * 1000);

    if (expirationTime <= new Date()) {
      res.status(401).json({ success: false, message: "Token has expired." });
    } else {
      const user = await User.findById(decoded.id);
      req.user = user; // Now you have access to the user data, including user ID
      next();
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ success: false, message: "Token has expired." });
    } else {
      console.error(err);
      res.status(400).json({ success: false, message: "Invalid token." });
    }
  }
}

//isAdmin
export const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Admin only',
                data: req.user
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}