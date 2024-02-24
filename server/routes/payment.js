import express from "express";
import { checkout, paymentVerification } from "../controllers/Payment.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post('/checkout', auth, checkout);
router.post('/paymentVerification', auth, paymentVerification);

export default router;