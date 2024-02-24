import bcrypt from "bcrypt";
import User from "../models/User.js"
import OTP from "../models/OTP.js"
import otpGenerator from "otp-generator"
import mailSender from "../utils/mailSender.js"
import jwt from "jsonwebtoken"
import { passwordUpdated } from "../templates/passwordUpdate.js"
import { mobileOtpSend } from "../utils/mobileOtpSend.js";
import { verifyOtp } from "../utils/mobileOtpSend.js";
// import {verifyOtp}  from "../utils/mobileOtp.js";

// Signup Controller for Registering User
export const signupMobile = async (req, res) => {

	try {
		// Destructure fields from the request body
		const {
			name,
			mobileNo,
			password,
			confirmPassword,
			role,
			otp,
		} = req.body;
		// Check if All Details are there or not
		if (
			!name ||
			!mobileNo ||
			!password ||
			!confirmPassword ||
			!otp
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}
		const validationOtp=verifyOtp(mobileNo,otp);
		if(validationOtp.valid==false){
			return res.status(500).json({
				success:false,
			    message:"otp invalid"
			})
		}
		// Check if password and confirm password match
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ mobileNo });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}
		//hasing the password
		const hashedPassword = await bcrypt.hash(password, 10);
		// console.log("here working")

		
		const user = await User.create({
			name,
			role,
			email,
			password: hashedPassword,
			role: role,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
		});


		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});

	} catch (error) {
		console.error(error);
		return res.status(500).json({
			sucess: false,
			message: `User cannot be registered. Please try again.}`
		});
	}
}


 export const  signupWithemail = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			name,
			email,
			password,
			confirmPassword,
			role,
			otp,
		} = req.body;
		// Check if All Details are there or not
		if (
			!name ||
			!email ||
			!password ||
			!confirmPassword ||
			!otp
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}
		// Check if password and confirm password match
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		// Find the most recent OTP for the email
		const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		
		if (response.length === 0) {
			// OTP not found for the email
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			// Invalid OTP
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the user
		let approved = "";
		approved === "Instructor" ? (approved = false) : (approved = true);

		
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			role: role,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};


// Login controller for authenticating users
export const login = async (req, res) => {
	try {
		// Get mobileNo and password from request body
		let { mobileNo, password } = req.body;
		mobileNo = "+" + mobileNo;
		// Check if email or password is missing
		if (!mobileNo || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
		}

		// Find user with provided mobileNo
		const user = await User.findOne({ mobileNo }).populate("profile").exec();
		// If user not found with provided mobileNo
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

		// Generate JWT token and Compare Password
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{ mobileNo: user.mobileNo, id: user._id, role: user.role },
				process.env.JWT_SECRET,
				{
					expiresIn: "24h",
				}
			);

			// Save token to user document in database
			user.token = token;
			await user.save()
			user.password = undefined;
			// Set cookie for token and return success response
			const options = {
				expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Success`,
			});
		} else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}
	} catch (error) {
		console.error(error);
		// Return 500 Internal Server Error status code with error message
		return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});
	}
};


// Send OTP For mobileNo Verification
export const sendotp = async (req, res) => {
	try {
		let { mobileNo } = req.body;
		mobileNo = "+" + mobileNo;
		// Check if user is already present
		// Find user with provided mobileNo
		const checkUserPresent = await User.findOne({ mobileNo });
		// to be used in case of signup

		// If user found with provided mobileNo
		if (checkUserPresent) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
		}
		try {
			var otpResponse = await mobileOtpSend(
				mobileNo
			);
		} catch (error) {
			if (error.status == 429) {
				return res.status(428).json({ status: false, message: "max attepemt reach" })
			}
			console.log("eee", error)
			return res.status(300).json({ status: false })
		}

		if (otpResponse?.channel === "sms")
			res.status(200).json({
				success: true,
				message: `OTP Sent Successfully`,

			});
		else {
			res.status(400).json({
				success: false,
				message: `try again`,
				otpResponse,
			});
		}
	} catch (error) {
		console.log("error at send otp function: ", error.message);
		return res.status(500).json({ success: false, error: error.message });
	}
};




// Controller for Changing Password
export const changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email, "zomato password changed",
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};