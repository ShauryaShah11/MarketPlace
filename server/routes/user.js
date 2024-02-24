import  express from "express"
import { login , changePassword,sendotp,signupMobile, signupWithemail } from "../controllers/Auth";

const router = express.Router();
// Route for user login
router.post("/login", login)

// Route for user signup with Mobile
router.post("/signup", signupMobile)

// Route for user signup with email
router.post("/signup", signupWithemail)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)