import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            {/* Add space between Navbar and Hero Section */}
            <div className="mt-20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-red-600 to-pink-500 text-white py-20">
                    <div className="text-center max-w-3xl mx-auto px-6">
                        <h1 className="text-5xl font-extrabold mb-4">Our Dynamic Team</h1>
                        <p className="text-lg">
                            We’re a team of passionate developers, designers, and innovators working together to bring ideas to life. 
                            Our expertise spans multiple domains, ensuring creativity and precision in everything we do.
                        </p>
                    </div>
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-red-700 to-pink-600 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
                        Our Talented Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <div className="w-full h-36 bg-gradient-to-br from-red-600 to-pink-500"></div>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Kashish Dadghaye"
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
                                />
                            </div>
                            <div className="p-6 text-center mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Kashish Dadghaye</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    A passionate Web Developer and dedicated B.Sc. IT student. Specializes in creating engaging quizzes and news pages.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <div className="w-full h-36 bg-gradient-to-br from-red-600 to-pink-500"></div>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Prerna Barde"
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
                                />
                            </div>
                            <div className="p-6 text-center mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Prerna Barde</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Prerna is a creative B.Sc. IT student who excels in crafting beautiful home pages and intuitive components.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <div className="w-full h-36 bg-gradient-to-br from-red-600 to-pink-500"></div>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Vaishnavi Ambatre"
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
                                />
                            </div>
                            <div className="p-6 text-center mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Vaishnavi Ambatre</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Vaishnavi specializes in designing user-friendly review pages with a flair for creativity and precision.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <div className="w-full h-36 bg-gradient-to-br from-red-600 to-pink-500"></div>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Tanvi Barbate"
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
                                />
                            </div>
                            <div className="p-6 text-center mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Tanvi Barbate</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Tanvi is a skilled UI/UX designer and web developer who creates visually appealing and functional designs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
