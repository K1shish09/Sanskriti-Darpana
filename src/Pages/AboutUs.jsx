import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const teamMembers = [
    {
        name: "Kashish Dadghaye",
        role: "Web Developer",
        description: "A passionate Web Developer and dedicated B.Sc. IT student. Specializes in creating engaging quizzes and news pages.",
        image: ""
    },
    {
        name: "Prerna Barde",
        role: "UI/UX Designer",
        description: "Prerna is a creative B.Sc. IT student who excels in crafting beautiful home pages and intuitive components.",
        image: "src/Assets/prerna .jpg"
    },
    
    {
        name: "Vaishnavi Ambatre",
        role: "Frontend Developer",
        description: "A detail-oriented Frontend Developer who crafted dynamic review pages with seamless user experience and elegant layouts.",
        image: "src/Assets/VAISHNAVI AMBARTE.jpeg"
    },
    {
        name: "Tanvi Barbate",
        role: "Component Developer",
        description: "A creative Component Developer focused on building reusable, responsive UI elements and optimizing design consistency across the project.",
        image: "src/Assets/Tanvi .jpg"
    }
    
];

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="mt-20">
                <div className="relative bg-gradient-to-br from-red-600 to-pink-500 text-white py-20 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Our Dynamic Team</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        We’re a team of passionate developers, designers, and innovators working together to bring ideas to life.
                        Our expertise spans multiple domains, ensuring creativity and precision in everything we do.
                    </p>
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Meet Our Talented Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md mb-4">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-pink-600 font-medium">{member.role}</p>
                                <p className="text-sm text-gray-600 mt-2">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
