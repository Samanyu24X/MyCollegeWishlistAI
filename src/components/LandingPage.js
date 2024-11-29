import React from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';

const LandingPage = () => {
    const navigate = useNavigate(); // Hook to navigate between routes

    return (
        <div className="relative bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white min-h-screen overflow-hidden">
            {/* Background Image */}
            <img src="/ai.jpg" alt="AI" className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0" />

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
            <section className="relative z-10 text-center flex flex-col justify-center items-center h-[80vh] pt-24">
                <h1 className="text-7xl md:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 animate-glow">
                    Your Perfect College Awaits
                </h1>
                <p className="text-xl md:text-3xl max-w-3xl mb-8 text-gray-300 animate-fade-in-up">
                    AI-driven college recommendations tailored for you.
                </p>
                <button
                    onClick={() => navigate('/form')} // Navigate to form page on click
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 py-4 px-12 rounded-full text-lg font-semibold shadow-2xl hover:shadow-neon transition-transform transform hover:scale-110"
                >
                    Get Started
                </button>
                <div className="scroll-indicator mt-10 animate-bounce">
                    <span className="text-gray-300">Scroll Down</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="relative z-10 text-center py-16 bg-black/30 text-white">
                <h2 className="text-5xl font-extrabold mb-10 text-white">Here's What We Do</h2>
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-around">
                    <div className="w-full md:w-1/4 bg-black/50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-4 text-cyan-300">🎤 Audio & Text Input</h3>
                        <p className="text-gray-300">Let users use free-flowing audio and text input, achieving 90%+ accuracy for college recommendation lists.</p>
                    </div>
                    <div className="w-full md:w-1/4 bg-black/50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-4 text-green-400">👥 Counselor Matching</h3>
                        <p className="text-gray-300">We match you with a college counselor or peer to guide your journey.</p>
                    </div>
                    <div className="w-full md:w-1/4 bg-black/50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-4 text-yellow-400">📚 Updated College Info</h3>
                        <p className="text-gray-300">We provide up-to-date information on colleges, helping you make informed decisions.</p>
                    </div>
                    <div className="w-full md:w-1/4 bg-black/50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-4 text-purple-400">🛠️ Freedom of Choice</h3>
                        <p className="text-gray-300">Our platform gives users complete freedom to explore and choose.</p>
                    </div>
                </div>
            </section>

            {/* Interactive Stats Section */}
            <section className="relative z-10 text-center py-16 bg-black/30 text-white">
                <h2 className="text-5xl font-extrabold mb-10 text-white">The Numbers Don't Lie</h2>
                <div className="flex justify-around">
                    <div>
                        <h3 className="text-6xl font-bold text-cyan-300 animate-count">50K+</h3>
                        <p>Students Matched</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-bold text-green-400 animate-count">300+</h3>
                        <p>Colleges Available</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-bold text-yellow-400 animate-count">98%</h3>
                        <p>User Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6 text-center">
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-cyan-300">💡 AI-Powered Insights</h2>
                    <p className="text-gray-300">Machine learning matches you with the perfect colleges based on your unique profile.</p>
                </div>
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 hover:-rotate-2 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-green-400">📊 Data-Driven Decisions</h2>
                    <p className="text-gray-300">Analyzing thousands of data points to find your best fit.</p>
                </div>
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">🖥️ Intuitive & Easy</h2>
                    <p className="text-gray-300">Designed to make the college search intuitive and enjoyable.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-black py-24">
                <h2 className="text-6xl font-extrabold text-center text-gray-200 mb-12 animate-slide-in">What Our Users Say</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="bg-black/50 p-8 m-4 rounded-lg shadow-xl hover:scale-110 transition-all duration-300">
                        <p className="italic text-lg">"AI-driven recommendations made my college search seamless."</p>
                        <h3 className="mt-4 text-xl font-bold text-cyan-300">- John Doe</h3>
                    </div>
                    <div className="bg-black/50 p-8 m-4 rounded-lg shadow-xl hover:scale-110 transition-all duration-300">
                        <p className="italic text-lg">"I found my dream school in just minutes!"</p>
                        <h3 className="mt-4 text-xl font-bold text-green-400">- Jane Smith</h3>
                    </div>
                    <div className="bg-black/50 p-8 m-4 rounded-lg shadow-xl hover:scale-110 transition-all duration-300">
                        <p className="italic text-lg">"I felt confident with the AI-powered college suggestions."</p>
                        <h3 className="mt-4 text-xl font-bold text-yellow-400">- Alex Johnson</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;