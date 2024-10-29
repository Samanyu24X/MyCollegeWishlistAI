import React from 'react';

const OutputPage = ({ recommendations }) => {
    return (
        <div className="container mx-auto p-6 bg-gradient-to-r from-gray-900 via-blue-700 to-teal-500 text-white min-h-screen pt-24"> {/* Changed to pt-24 */}
            <h1 className="text-4xl font-extrabold text-center mb-8 text-white">Your AI-Powered College Matches</h1>

            {/* Stretch Schools */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">🚀 Stretch Schools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recommendations.stretch.map((college, index) => (
                        <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white">{college.name}</h3>
                            <p className="text-gray-200">{college.location}</p>
                            <p className="text-gray-300">Ranking: {college.ranking}</p>

                            {/* Tooltip for explanation */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gray-800 border border-gray-300 p-4 rounded-lg shadow-lg -top-24 left-1/2 transform -translate-x-1/2 w-64 text-sm text-white">
                                This school is a stretch based on your academic profile.
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Target Schools */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-6">🎯 Target Schools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recommendations.target.map((college, index) => (
                        <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white">{college.name}</h3>
                            <p className="text-gray-200">{college.location}</p>
                            <p className="text-gray-300">Ranking: {college.ranking}</p>

                            {/* Tooltip for explanation */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gray-800 border border-gray-300 p-4 rounded-lg shadow-lg -top-24 left-1/2 transform -translate-x-1/2 w-64 text-sm text-white">
                                This school is a good match for your academic profile.
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Safety Schools */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">🛡️ Safety Schools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recommendations.safety.map((college, index) => (
                        <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white">{college.name}</h3>
                            <p className="text-gray-200">{college.location}</p>
                            <p className="text-gray-300">Ranking: {college.ranking}</p>

                            {/* Tooltip for explanation */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gray-800 border border-gray-300 p-4 rounded-lg shadow-lg -top-24 left-1/2 transform -translate-x-1/2 w-64 text-sm text-white">
                                This school is a safer option based on your academic profile.
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex justify-center">
                <button className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
                    Get Expert Help
                </button>
            </div>
        </div>
    );
}

export default OutputPage;