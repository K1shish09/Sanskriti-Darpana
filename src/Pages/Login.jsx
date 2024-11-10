import React, { useState } from 'react';
import { FaRegUserCircle, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import myimg from './../Assets/img-login.jpg';
import namaste from './../Assets/namaste.png';
import Navbar from '../components/Navbar';

function Login() {
  // State variables for form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [isLoading, setIsLoading] = useState(false); // To handle loading state during form submission
  const [error, setError] = useState(''); // For form validation errors

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

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
      <div className="w-full sm:w-[400px] md:w-[650px] lg:w-[850px] bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 h-[450px] mt-12 sm:mt-32 md:mt-52 mx-auto rounded-lg flex flex-col md:flex-row">
        {/* Left image section */}
        <div className="w-full sm:w-[350px] md:w-[350px] h-[440px]">
          <img src={myimg} alt="Login" className="w-full h-full rounded-lg m-1"  />
        </div>

        {/* Right form section */}
        <div className="w-full sm:w-[400px] md:w-[490px] h-auto md:h-[490px] mt-4 md:mt-0 px-4 md:px-8 flex flex-col items-center">
          <div className="w-full h-[52px] flex justify-center mb-12">
            <img src={namaste} alt="Namaste" className="h-24 w-24"  />
          </div>

          {/* Error message display */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <div className="w-full flex flex-col space-y-4">
            {/* Email input */}
            <div className="relative w-full h-[55px] pt-1 mt-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="w-full h-full border-2 border-white rounded-md bg-transparent pl-5 text-white outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
              />
              <FaRegUserCircle className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white" />
            </div>

            {/* Password input */}
            <div className="relative w-full h-[55px] pt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                
                className="w-full h-full border-2 border-white rounded-md bg-transparent pl-5 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state on change
              />
               {/* <FaLock className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white" />  */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white"
              >
                 {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center text-white">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-white">Forgot Password?</a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-8 w-40 h-12 rounded-lg border-2 border-white text-white font-semibold text-xl mx-auto mt-10"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Submitting..." : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

