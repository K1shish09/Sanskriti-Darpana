import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !password || password !== confirmPassword) {
            setError('All fields are required and passwords must match!');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setError('');
            alert('Signup successful!');
            resetForm();
        }, 2000);
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="bg-cover bg-center flex justify-center items-center h-screen">
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
                <h1 className="text-4xl text-center font-extrabold mb-4 mt-16 text-red-600">Sign Up</h1>
                <form onSubmit={handleSignupSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Full Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-gray-800">Confirm Password</label>
                        <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-red-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                        {isLoading ? 'Loading...' : 'Sign Up'}
                    </button>
                    <div className="mt-4">
                        <button type="button" className="w-full flex items-center justify-center bg-gradient-to-tr hover:to-pink-600 hover:from-red-700 text-red-700 border-2 border-red-700 hover:text-white font-semibold rounded-3xl py-2 px-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google logo" className="w-5 h-5 mr-3" />
                            Sign Up with Google
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUp;
