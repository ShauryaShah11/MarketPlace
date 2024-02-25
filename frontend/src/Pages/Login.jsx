import React, { useState } from 'react';
// import { SiFraunhofergesellschaft } from 'react-icons/si';
import { SiFraunhofergesellschaft } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
// import { useState } from "react";
import { handleloginwithemail } from '../Services/Register'
import Swal from 'sweetalert2';
import google from '../Assets/google.png'
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role

  const handleKeyPress = async (e) => {
    if (role == 'admin') {
      Swal.fire({
        title: "Login Successfully",

        icon: "success"
      }).then(() => {
        
        window.location.href = "/admin/customer"
      })
    }
    else{
      try {

        const data = {
          email: email,
          password: password
        }; // Create data object with email field
        const order = await handleloginwithemail(data);
       
        if (order.success) {
          Swal.fire({
            title: "Login Successfully",
  
            icon: "success"
          }).then(() => {
            localStorage.setItem("token", order.user.token)
            window.location.href = "/"
          })
        }
        else {
          Swal.fire({
            title: "Somethig went wrong",
            text: "That thing is still around?",
            icon: "question"
          });
        }
        console.log(order)
  
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
  }

  return (
    <div className="font-sans antialiased flex justify-center items-center bg-slate-200" style={{ marginTop: "30px", height: "600px" }}>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        <div className="rounded-lg  text-6xl" style={{ marginTop: "100px" }}>
          <SiFraunhofergesellschaft />
        </div>
        <h1 className="text-center text-primary text-4xl mb-1 mt-2">Login</h1>
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
          <div className="flex">
            <label className="text-lg">Role:</label>
            <div className="flex items-center mt-0 mr-10 ml-10">
              <input
                type="radio"
                id="customerRole"
                name="role"
                value="customer"
                checked={role === 'customer'}
                onChange={() => setRole('customer')}
              />
              <label htmlFor="customerRole" className="ml-2">Customer</label>
            </div>
         
              <div className="flex items-center">
                <input
                  type="radio"
                  id="adminRole"
                  name="role"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                />
                <label htmlFor="adminRole" className="ml-2">Admin</label>
              </div>
           
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleKeyPress}
              type="button"
              className="flex items-center gap-2 justify-center mt-1 mb-1 bg-blue-500 text-white py-2  rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ width: "100px" }}
            >
              Login
            </button>
          </div>
          <div className="text-center text-gray-500 mb-2">
            <span>
              <div className="border-solid border-gray-500 my-2 w-1/2 mx-auto"></div>
              ---------- or -------------
              <div className="border-solid border-gray-500 my-2 w-1/2 mx-auto"></div>
            </span>
          </div>
          <div className="flex justify-center">
            <button style={signInButtonStyle2}>
              <img src={google} alt="Google Logo" style={googleLogoStyle} />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex w-1/2 border p-0 h-full "
        style={{ borderRadius: "10px" }}
      >
        <img
          className="w-full h-full"
          style={{ borderRadius: "10px" }}
          src="https://e1.pxfuel.com/desktop-wallpaper/55/1001/desktop-wallpaper-3d-login-page.jpg"
          alt="background"
        />
      </div>
    </div>
  );
}

const signInButtonStyle2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '190px',
  height: '50px',
  backgroundColor: '#000', // Google's brand color
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',

  marginLeft: "10px",
  marginBottom: "20px"
};
const googleLogoStyle = {
  width: '30px',
  height: '30px',
  marginRight: '10px',
};

export default LoginForm;
