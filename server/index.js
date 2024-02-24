import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; //use to entertaint frontend
import dotenv from "dotenv";
const app = express();
dotenv.config();

//middleware to pass json request body
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`at ${PORT}`);
});

app.get("/", (req, res) => {
    return res.json({
        sucess: true,
        message: "market-place server is running up and running...",
    });
});