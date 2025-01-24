import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="bg-gradient-to-tr from-red-600 to-pink-500 text-white py-20">
                <div className="text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold">Our Dynamic Team</h1>
                    <p className="mt-4 text-lg">
                        Driven by passion, creativity, and teamwork, our goal is to create exceptional digital experiences. Meet the minds behind the magic!
                    </p>
                </div>
            </div>

            {/* Interactive Team Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
                        Meet Our Team
                    </h2>

                    {/* Team Timeline */}
                    <div className="relative">
                        {/* Line for Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-red-600 to-pink-500 w-1 h-full z-0"></div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16">
                            {/* Card 1 */}
                            <div className="relative z-10 flex lg:justify-end">
                                <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto lg:mr-6 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-20 rounded-full border-4 border-pink-500">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Kashish Dadghaye"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Kashish Dadghaye</h3>
                                            <p className="text-sm text-gray-600">
                                                A dedicated Web Developer passionate about creating engaging quizzes and news pages.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative z-10 flex lg:justify-start">
                                <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto lg:ml-6 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-20 rounded-full border-4 border-pink-500">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Prerna Barde"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Prerna Barde</h3>
                                            <p className="text-sm text-gray-600">
                                                A creative developer excelling in building captivating home pages and seamless components.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative z-10 flex lg:justify-end">
                                <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto lg:mr-6 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-20 rounded-full border-4 border-pink-500">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Vaishnavi Ambatre"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Vaishnavi Ambatre</h3>
                                            <p className="text-sm text-gray-600">
                                                An expert in creating user-friendly review pages with a focus on precision and creativity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="relative z-10 flex lg:justify-start">
                                <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto lg:ml-6 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-20 rounded-full border-4 border-pink-500">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Tanvi Barbate"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Tanvi Barbate</h3>
                                            <p className="text-sm text-gray-600">
                                                A talented UI/UX designer who blends innovation and functionality to deliver exceptional designs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
};

export default AboutUs;
