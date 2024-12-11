import React from 'react';

const OutputPage = () => {
    // Example Recommendations with 10 colleges
    const recommendations = [
        { name: 'Harvard University', location: 'Cambridge, MA', ranking: 1 },
        { name: 'Stanford University', location: 'Stanford, CA', ranking: 3 },
        { name: 'Yale University', location: 'New Haven, CT', ranking: 5 },
        { name: 'University of Michigan', location: 'Ann Arbor, MI', ranking: 25 },
        { name: 'University of Southern California', location: 'Los Angeles, CA', ranking: 22 },
        { name: 'University of Texas', location: 'Austin, TX', ranking: 50 },
        { name: 'Arizona State University', location: 'Tempe, AZ', ranking: 65 },
        { name: 'Columbia University', location: 'New York, NY', ranking: 2 },
        { name: 'MIT', location: 'Cambridge, MA', ranking: 4 },
        { name: 'Duke University', location: 'Durham, NC', ranking: 10 },
    ];

    return (
        <div className="container mx-auto p-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen pt-28">
            <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Your AI-Powered College Matches
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((college, index) => (
                    <div
                        key={index}
                        className="group relative p-6 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        {/* College Name */}
                        <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-purple-400 transition-all">
                            {college.name}
                        </h3>
                        {/* Location */}
                        <p className="text-gray-300 mt-2">
                            <span className="font-bold text-purple-300">📍 Location:</span> {college.location}
                        </p>
                        {/* Ranking */}
                        <p className="text-gray-300 mt-2">
                            <span className="font-bold text-green-300">⭐ Ranking:</span> #{college.ranking}
                        </p>

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gray-800/90 border border-gray-300 p-4 rounded-lg shadow-lg top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 text-sm text-white">
                            <p>
                                <span className="font-bold text-pink-400">Why Choose This School?</span> Discover unique programs, top-notch faculty, and an amazing campus life!
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
                    Get Expert Help
                </button>
            </div>
        </div>
    );
};

export default OutputPage;