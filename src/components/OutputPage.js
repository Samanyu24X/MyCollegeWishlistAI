import React from 'react';

const OutputPage = ({ recommendations }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-12 text-white">
            <div className="w-3/4 mx-auto px-12">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Recommended Colleges</h2>

                {/* Grid Layout: 2 rows and 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.map((college, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                            {/* College Name */}
                            <h3 className="text-2xl font-bold text-indigo-300 mb-4">{college.collegeName}</h3>
                            {/* College Description */}
                            <p className="text-gray-400 text-sm">{college.response.description || 'No description available.'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OutputPage;
