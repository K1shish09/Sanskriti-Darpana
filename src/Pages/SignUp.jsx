import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase/firebaseConfig'; // Import firebaseConfig
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function SignUp() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    // State variables for form input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle form submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !phone || !password || password !== confirmPassword) {
            setError('All fields are required and passwords must match!');
            return;
        }

        // Simulate loading during form submission (e.g., API call)
        setIsLoading(true);

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name,
                email,
                phone,
            });

            setIsLoading(false);
            setError('');
            toast.success('Signup successful!');
            navigate('/home'); // Navigate to home page
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to toggle confirm password visibility
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // Handle Google sign-in
    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save user data to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name: user.displayName,
                email: user.email,
                phone: user.phoneNumber,
            });

            toast.success('Google sign-in successful!');
            navigate('/home'); // Navigate to home page
        } catch (error) {
            setError(error.message);
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return (
        <div className="bg-cover bg-center flex justify-center items-center h-screen">
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
                <h1 className="text-4xl text-center font-extrabold mb-4 mt-16 text-red-600">Sign Up</h1>
                <form onSubmit={handleSignupSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={togglePasswordVisibility}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-gray-800">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        {isLoading ? 'Loading...' : 'Sign Up'}
                    </button>
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
                            {isGoogleLoading ? 'Loading...' : 'Sign Up with Google'}
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-500 hover:underline">
                                Login here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
