import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";
import { response } from "express";

const OTPSchema = mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    otp: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60 
    }
});

async function sendVerificationEmail(email, otp) {
    try {
        const MessageResponds = await mailSender(email, "Verification Email By CourseWave", otp);
        if(!MessageResponds){
            throw "try again later"
        }
        console.log("Successfully sent otp:", MessageResponds);
    } catch (error) {
        console.log("Error occurs at sendVerificationEmail:", error.message);
        throw error;
    }
}

OTPSchema.pre("save", async function (next) {
    try {
        await sendVerificationEmail(this.email, this.otp);
        next();
    } catch (error) {
        return response.status(500).json({
            status: false,
            error: error.message
        });
    }
});

export default mongoose.model("OTP", OTPSchema);
