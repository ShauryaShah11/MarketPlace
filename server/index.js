import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/category.js";
import authRoutes from "./routes/auth.js";
import paymentRoutes from "./routes/payment.js"; 
import productRoutes from "./routes/product.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/products', productRoutes);

app.get("/", (req, res) => {
    return res.json({
        sucess: true,
        message: "market-place server is running up and running...",
    });
});

app.listen(PORT, () => {
    connectDb();
    console.log(`server is running at ${PORT}`);
});

app.get('/',(err, req, res, next) => {
    console.error(err);
    return res.status(500).json({
      error: 'Internal server error'
    })
})
