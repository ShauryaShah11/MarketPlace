import { SiFraunhofergesellschaft } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import Register from "../Assets/picture/register.jpg";

export default function Login() {
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPassword] = useState("");
    const [role, setRole] = useState("Customer");
    const [showOTPField, setShowOTPField] = useState(false); // State to control OTP field visibility
    const [otp, setOTP] = useState(""); // State to store OTP value

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            switch (e.target.name) {
                case "email":
                    document?.getElementById("password")?.focus();
                    break;
                case "password":
                    document?.getElementById("password")?.blur();
                    break;
                default:
                    break;
            }
        }
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSendOTP = () => {
        // You can implement OTP sending logic here
        console.log("entered otp")
        setShowOTPField(true); // Show OTP field when OTP is sent
    };

    const handleRegister = () => {
        // You can implement registration logic here
        // For demo purposes, let's assume registration is successful
        alert("Registration Successful!");
    };

    return (
        <div className="font-sans h-screen antialiased flex justify-center items-center bg-slate-2000" style={{ border: "1px solid black" }}>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 h-full relative">
                <div className="rounded-lg mb-2 text-6xl absolute top-0 left-0 ml-8 mt-8">
                    <SiFraunhofergesellschaft />
                </div>
                <h1 className="text-center text-primary text-4xl mb-12 mt-2" >Login</h1>
                <form className="w-8/12 " style={{ border: "2px solid black", backgroundColor: "white", padding: "20px", zIndex: 1, borderRadius: "30px", marginBottom: "100px", marginRight: "550px" }}> {/* Added background color and positioning */}
                    <div className="mb-1">
                        <label className="text-lg" htmlFor="name">
                            Name:
                        </label>
                        <br />
                        <input
                            className="h-10 mt-2 rounded-md border-r-2 pl-2 w-full"
                            style={{ border: "2px solid black" }}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(ev) => setname(ev.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="text-lg" htmlFor="email">
                            Email:
                        </label>
                        <br />
                        <input
                            className="h-10 mt-2 rounded-md border-r-2 pl-2 w-full mb-2"
                            style={{ border: "2px solid black" }}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="E-mail Address"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="text-lg" htmlFor="password">
                            Password:
                        </label>
                        <br />
                        <input
                            className="h-10 mt-2 rounded-md border-r-2 pl-2 w-full mb-2"
                            style={{ border: "2px solid black" }}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="text-lg" htmlFor="cpassword">
                            Confirm Password:
                        </label>
                        <br />
                        <input
                            className="h-10 mt-0 rounded-md border-r-2 pl-2 w-full mb-2"
                            type="cpassword"
                            name="cpassword"
                            id="cpassword"
                            placeholder="confirmpassword"
                            style={{ border: "2px solid black" }}
                            value={confirmpass}
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-lg" htmlFor="password">
                            Mobile no.:
                        </label>
                        <br />
                        <input
                            className="h-10 mt-0 rounded-md border-r-2 pl-2 w-full mb-3"
                            type="text"
                            id="mobile"
                            name="mobile"
                            placeholder="contact number"
                            value={mobile}
                            style={{ border: "2px solid black" }}
                            onChange={(ev) => setmobile(ev.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="text-lg" htmlFor="role">
                            Role:
                        </label>
                        <br />
                        <select
                            className="h-10 mt-0 rounded-md border-r-2 pl-2 w-full mb-2"
                            name="role"
                            id="role"
                            value={role}
                            onChange={handleRoleChange}
                            style={{ border: "2px solid black" }}
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    {showOTPField ? (
                        <div className="mb-1">
                            <label className="text-lg" htmlFor="otp">
                                Enter OTP:
                            </label>
                            <br />
                            <input
                                className="h-10 mt-0 rounded-md border-r-2 pl-2 w-full mb-2"
                                type="text"
                                id="otp"
                                name="otp"
                                placeholder="Enter OTP"
                                value={otp}
                                style={{ border: "2px solid black" }}
                                onChange={(ev) => setOTP(ev.target.value)}
                            />
                        </div>
                    ) : (
                       <></>
                    )}
                    <div className="flex justify-center">
                        <button
                            onClick={showOTPField ? handleRegister : handleSendOTP}
                            type="button"
                            className="flex items-center gap-2 justify-center mt-1 mb-1 bg-pink-500 text-white py-2 w-48 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            {showOTPField ? "Register" : "Send OTP"}
                        </button>
                    </div>
                </form>
            </div>
            <div className="hidden lg:flex  absolute inset-0"> {/* Added positioning */}
                <img
                    className="w-full h-full "
                    style={{ height: "100%", width: "100%" }}
                    src={Register}
                    alt="background"
                />
            </div>
        </div>
    );
}
