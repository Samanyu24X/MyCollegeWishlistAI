import React from 'react';

const OutputPage = ({ recommendations }) => {
    return (
        <div className="container mx-auto p-6 bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white min-h-screen pt-24"> {/* Avoid navbar overlap */}
            <h1 className="text-4xl font-extrabold text-center mb-8 text-white">Your AI-Powered College Matches</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((college, index) => (
                    <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-white">{college.name}</h3>
                        <p className="text-gray-200">{college.location}</p>
                        <p className="text-gray-300">Ranking: {college.ranking}</p>

                        {/* Tooltip for additional details */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gray-800 border border-gray-300 p-4 rounded-lg shadow-lg -top-20 left-1/2 transform -translate-x-1/2 w-64 text-sm text-white">
                            Discover why this school is a great fit for you!
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
                    Rate Your Recommendations
                </button>
            </div>
        </div>
    );
};

export default OutputPage;