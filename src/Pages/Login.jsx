import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import myimg from './../Assets/img-login.jpg';
import namaste from './../Assets/namaste.png';
import Navbar from '../components/Navbar';
import './Login.css';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase/firebaseConfig'; // Import firebaseConfig
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // State variables for form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [isLoading, setIsLoading] = useState(false); // Handle loading state during form submission
  const [isGoogleLoading, setIsGoogleLoading] = useState(false); // Handle loading state for Google sign-in
  const [error, setError] = useState(''); // Form validation errors

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form fields
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    // Simulate loading during form submission (e.g., API call)
    setIsLoading(true);

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setIsLoading(false);
        setError('');
        toast.success('Login successful!');
        navigate('/home'); // Navigate to home page
      } else {
        setIsLoading(false);
        setError('');
        toast.error('User does not exist!');
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        toast.success('Google sign-in successful!');
        navigate('/home'); // Navigate to home page
      } else {
        toast.error('User does not exist!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-cover bg-center flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-[300px] h-[400px] hidden lg:block">
          <img src={myimg} alt="Placeholder" className="object-cover w-full h-full rounded-md border-red-600 border-4" />
        </div>

        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-4xl text-center font-extrabold mb-4 text-red-600">Login</h1>

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

            {/* Password Link */}
            <div className="mb-4 relative">
              <div className="mb-4 flex items-center justify-between">
                <label htmlFor="password" className="block text-gray-800">Password</label>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              <span className="absolute right-3 top-12 cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>

            {/* Sign In with Google Button */}
            <div className="mt-4">
              <button
                type="button"
                className="w-full flex items-center justify-center bg-gradient-to-tr hover:to-pink-600 hover:from-red-700 text-red-700 border-2 border-red-700 hover:text-white font-semibold rounded-3xl py-2 px-4"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
                  alt="Google logo"
                  className="w-5 h-5 mr-3"
                />
                {isGoogleLoading ? 'Loading...' : 'Sign In with Google'}
              </button>
            </div>

            {/* Don't have an account? Create one Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

