import express from "express";
import { login , changePassword, signupMobile, signupWithemail, sendotpEmail, sendotpMobile } from "../controllers/Auth.js";
import { auth } from "../middlewares/auth.js";
import { resetPasswordToken } from "../controllers/ResetPassword.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup-mobile', signupMobile);
router.post("/signup-email", signupWithemail);
router.post('/sendotp-email', sendotpEmail);
router.post('/sendotp-mobile', sendotpMobile);
router.post("/changepassword", auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPasswordToken);

export default router;
