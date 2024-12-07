import React from 'react';
import Particles from 'react-tsparticles';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/form'); // Navigate to the form page
    };

    return (
        <div className="relative bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white min-h-screen overflow-hidden">
            {/* Particles Background */}
            <Particles
                options={{
                    particles: {
                        number: { value: 120 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.6 },
                        size: { value: 3 },
                        move: { speed: 1.5, direction: "top", out_mode: "out" },
                    },
                }}
                className="absolute inset-0 z-0"
            />

            {/* Hero Section */}
            <section className="relative z-10 text-center flex flex-col justify-center items-center h-screen">
                <h1 className="text-7xl md:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 animate-glow">
                    Your Perfect College Awaits
                </h1>
                <p className="text-xl md:text-3xl max-w-3xl mb-8 text-gray-300 animate-fade-in-up">
                    Discover AI-driven college recommendations designed just for you.
                </p>
                <button
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 py-4 px-12 rounded-full text-lg font-semibold shadow-2xl hover:shadow-neon transition-transform transform hover:scale-110"
                >
                    Get Started
                </button>
            </section>

            {/* What We Offer Section */}
            <section className="relative z-10 text-center py-16 bg-black/30 text-white">
                <h2 className="text-5xl font-extrabold mb-10 text-white">Here’s What We Offer</h2>
                <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
                    <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-4 text-cyan-300">🎯 Tailored Matches</h3>
                        <p className="text-gray-300">Our AI analyzes your preferences and profile to provide the best college recommendations.</p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-4 text-green-400">📚 Latest Information</h3>
                        <p className="text-gray-300">Get real-time updates on college requirements and admissions.</p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-4 text-yellow-400">🤝 Expert Guidance</h3>
                        <p className="text-gray-300">We connect you with experts to guide you through every step.</p>
                    </div>
                </div>
            </section>

            {/* Interactive Stats Section */}
            <section className="relative z-10 text-center py-16 bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white">
                <h2 className="text-5xl font-extrabold mb-10">The Numbers Speak for Themselves</h2>
                <div className="flex flex-wrap justify-around items-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl font-bold text-cyan-300">50K+</h3>
                        <p className="text-gray-300">Students Matched</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl font-bold text-green-400">300+</h3>
                        <p className="text-gray-300">Colleges Available</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl font-bold text-yellow-400">98%</h3>
                        <p className="text-gray-300">User Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
                <h2 className="text-5xl font-extrabold text-center text-gray-200 mb-10">What Our Users Say</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xs bg-black/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="italic text-lg">"This platform made my college search effortless!"</p>
                        <h3 className="mt-4 text-xl font-bold text-cyan-300">- Sarah</h3>
                    </div>
                    <div className="max-w-xs bg-black/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="italic text-lg">"I found my dream college with just a few clicks."</p>
                        <h3 className="mt-4 text-xl font-bold text-green-400">- Michael</h3>
                    </div>
                    <div className="max-w-xs bg-black/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="italic text-lg">"The AI recommendations were spot on!"</p>
                        <h3 className="mt-4 text-xl font-bold text-yellow-400">- Emily</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;