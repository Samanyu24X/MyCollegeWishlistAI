import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
            <header className="p-6 flex justify-between items-center">
                <h1 className="text-4xl font-bold">MyCollegeWishlistAI</h1>
                <nav className="space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <a href="/services" className="hover:text-gray-300">Services</a>
                    <a href="/contact" className="hover:text-gray-300">Contact</a>
                </nav>
            </header>

            <main className="flex flex-col items-center justify-center text-center mt-20">
                <h2 className="text-5xl font-extrabold mb-6">AI-Driven College Recommendations</h2>
                <p className="text-xl mb-10">Leverage AI to find your dream college effortlessly.</p>
                <a href="/get-started" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold">Get Started</a>
            </main>

            <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 px-10">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-bold">AI-Powered</h3>
                    <p className="mt-3">Using AI to give you accurate recommendations.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-bold">Data-Driven</h3>
                    <p className="mt-3">Based on real data to ensure reliable advice.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-bold">User-Friendly</h3>
                    <p className="mt-3">Designed to be intuitive and easy to use.</p>
                </div>
            </section>

            <footer className="mt-20 text-center p-6">
                <p>&copy; 2024 MyCollegeWishlistAI</p>
            </footer>
        </div>
    );
};

export default HomePage;