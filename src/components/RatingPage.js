import React, { useState } from 'react';

const RatingPage = () => {
    const [ratings, setRatings] = useState({
        accuracy: 0,
        relevance: 0,
        satisfaction: 0,
        easeOfUse: 0,
    });

    const handleRatingChange = (metric, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [metric]: value,
        }));
    };

    return (
        <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white min-h-screen pt-28">
            <div className="max-w-2xl mx-auto bg-gray-800/50 p-8 rounded-xl shadow-2xl">
                <h1 className="text-5xl font-extrabold text-center mb-8 text-white">Rate Your Experience</h1>
                <p className="text-center text-gray-300 mb-12">
                    We value your feedback! Please rate our recommendations on the following metrics.
                </p>

                <div className="flex flex-col items-center space-y-8">
                    {/* Accuracy Rating */}
                    <div className="w-full">
                        <label className="block text-2xl font-semibold text-cyan-300 mb-2">Accuracy</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={ratings.accuracy}
                            onChange={(e) => handleRatingChange("accuracy", e.target.value)}
                            className="w-full accent-cyan-400"
                        />
                        <p className="text-gray-300 text-center mt-2">Rating: {ratings.accuracy}</p>
                    </div>

                    {/* Relevance Rating */}
                    <div className="w-full">
                        <label className="block text-2xl font-semibold text-green-300 mb-2">Relevance</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={ratings.relevance}
                            onChange={(e) => handleRatingChange("relevance", e.target.value)}
                            className="w-full accent-green-400"
                        />
                        <p className="text-gray-300 text-center mt-2">Rating: {ratings.relevance}</p>
                    </div>

                    {/* Satisfaction Rating */}
                    <div className="w-full">
                        <label className="block text-2xl font-semibold text-yellow-300 mb-2">Satisfaction</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={ratings.satisfaction}
                            onChange={(e) => handleRatingChange("satisfaction", e.target.value)}
                            className="w-full accent-yellow-400"
                        />
                        <p className="text-gray-300 text-center mt-2">Rating: {ratings.satisfaction}</p>
                    </div>

                    {/* Ease of Use Rating */}
                    <div className="w-full">
                        <label className="block text-2xl font-semibold text-purple-300 mb-2">Ease of Use</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={ratings.easeOfUse}
                            onChange={(e) => handleRatingChange("easeOfUse", e.target.value)}
                            className="w-full accent-purple-400"
                        />
                        <p className="text-gray-300 text-center mt-2">Rating: {ratings.easeOfUse}</p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-12 flex justify-center">
                    <button className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
                        Submit Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingPage;