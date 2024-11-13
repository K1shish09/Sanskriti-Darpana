import React, { useState } from 'react';
import { FaRegUserCircle, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import myimg from './../Assets/img-login.jpg';
import namaste from './../Assets/namaste.png';
import Navbar from '../components/Navbar';
import './Login.css'

function Login() {
   
  
  // State variables for form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [isLoading, setIsLoading] = useState(false); // Handle loading state during form submission
  const [error, setError] = useState(''); // Form validation errors

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form fields
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    // Simulate loading during form submission (e.g., API call)
    setIsLoading(true);

    // Reset error and simulate successful submission after a delay
    setTimeout(() => {
      setIsLoading(false);
      setError('');
      alert('Form submitted successfully!');
      resetForm();
    }, 2000); // 2 seconds delay to simulate API call
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to reset the form
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Navbar />
      <div className="bg-cover bg-center flex justify-center items-center h-screen"  >
        {/* Left: Image */}
         <div className="w-[300px] h-[400px] hidden lg:block ">
          <img src={myimg} alt="Placeholder" className="object-cover w-full h-full rounded-md border-red-600 border-4" />
        </div> 
        
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-4xl text-center font-bolder mb-4 text-red-700 ">Login</h1>
          
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-blue-500 hover:underline text-sm mt-1"
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </button>
            </div>

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-red-500"
              />
              <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline ">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>

          {/* Sign-up Link */}
          <div className="mt-6 text-green-500 text-center">
            <a href="#" className="hover:underline">Sign up Here</a>
          </div>
        </div>
      </div>
    </>
  );
 }


export default Login ;

