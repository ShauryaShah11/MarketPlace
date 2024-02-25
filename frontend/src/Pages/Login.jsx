import { SiFraunhofergesellschaft } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
// import {handleloginwithemail} from './Services/Register'
import Swal from 'sweetalert2';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyPress = async(e) => {
    try {
           
      const data = { email: email,
                 password:password
      }; // Create data object with email field
  const order = "await handleloginwithemail(data)";
      if(order){
          Swal.fire({
              title: "Login Successfully",
              
              icon: "success" 
            }).then(()=>{
              localStorage.setItem("user",order.user)
              window.location.href="/"
            })
      }
      else{
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question"
        });
      }
    console.log(order)
      
      
  } catch (error) {
      console.error('Error fetching data:', error);
  }
  };

  return (
    <div className="font-sans	 antialiased flex justify-center items-center h-screen bg-slate-200">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        <div className="rounded-lg mb-2 text-6xl">
          <SiFraunhofergesellschaft />
        </div>
        <h1 className="text-center text-primary text-4xl mb-12 mt-2">Login</h1>
        <form className="w-10/12 mx-auto">
          <div className="mb-2">
            <label className="text-lg" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              className="h-10 mt-2 rounded-md border-r-2 pl-2 w-full mb-2"
              type="text"
              name="email"
              id="email"
              placeholder="Email/Mobile"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="text-lg" htmlFor="password">
              Password:
            </label>
            <br />
            <input
              className="h-10 mt-2 rounded-md border-r-2 pl-2 w-full mb-3"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleKeyPress}
              type="button"
              className="flex items-center gap-2 justify-center mt-1 mb-1 bg-blue-500 text-white py-2 w-48 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div className="text-center text-gray-500 mb-2">
            <span>
              <div className="border-solid border-gray-500 my-2 w-1/2 mx-auto"></div>
              or
              <div className="border-solid border-gray-500 my-2 w-1/2 mx-auto"></div>
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex mt-1 items-center w-48 gap-2 justify-center mb-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <FaGoogle />
              <span>Login with Google</span>
            </button>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex w-1/2 border p-0 h-full">
        <img
          className="w-full h-full"
          src="https://e1.pxfuel.com/desktop-wallpaper/55/1001/desktop-wallpaper-3d-login-page.jpg"
          alt="background"
        />
      </div>
    </div>
  );
}