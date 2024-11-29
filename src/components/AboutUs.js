import React from 'react';

const AboutUs = () => {
    return (
        <div className="relative bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white min-h-screen p-10">
            <section className="text-center flex flex-col justify-center items-center h-[70vh]">
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500">
                    About Us
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300">
                    MyCollegeWishlistAI is an AI-driven platform designed to help students find the perfect college. Our mission is to simplify the college search process using cutting-edge AI algorithms that match students with universities that best fit their profile, preferences, and future goals.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 text-center">
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-cyan-300">💡 Our Vision</h2>
                    <p className="text-gray-300">Empowering students to make informed decisions about their future by utilizing AI to provide personalized college recommendations.</p>
                </div>
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-green-400">🚀 Our Mission</h2>
                    <p className="text-gray-300">Providing students with real-time, data-driven insights into colleges, ensuring they find the best fit for their academic and personal aspirations.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6 text-center">
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">📊 Data You Can Trust</h2>
                    <p className="text-gray-300">We provide accurate, up-to-date college information to help you make the best decision.</p>
                </div>
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-cyan-300">🎓 Expert Guidance</h2>
                    <p className="text-gray-300">Our platform connects you with college counselors and peers to guide you every step of the way.</p>
                </div>
                <div className="bg-black/50 p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-green-400">🌍 A Global Reach</h2>
                    <p className="text-gray-300">Our platform serves students from across the globe, ensuring everyone gets the support they need.</p>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-24 text-center bg-black/30 text-white">
                <h2 className="text-5xl font-extrabold mb-12 text-white">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-around items-center">
                    <div className="p-8 bg-black/50 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-cyan-300 mb-4">👨‍💻 Arham Doshi</h3>
                        <p className="text-gray-300">Front-End Developer</p>
                    </div>
                    <div className="p-8 bg-black/50 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-green-400 mb-4">👨‍💼 Vinayak Something</h3>
                        <p className="text-gray-300">Project Manager</p>
                    </div>
                    <div className="p-8 bg-black/50 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-teal-300 mb-4">👨‍💼 Sony Pati</h3>
                        <p className="text-gray-300">Product Manager 2</p>
                    </div>
                    <div className="p-8 bg-black/50 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-yellow-400 mb-4">👩‍💻 Jamie Lee</h3>
                        <p className="text-gray-300">UI/UX Designer</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;