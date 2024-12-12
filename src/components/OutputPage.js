import React from 'react';

const OutputPage = ({ recommendations }) => {
    // Helper function to format the description
    const formatDescription = (description) => {
        if (!description) return 'No description available.';

        // Regex to find patterns like "**Subtitle**"
        const subtitlePattern = /\*\*(.*?)\*\*/g;

        // Replace the pattern with bold HTML and insert newlines
        const formatted = description.replace(
            subtitlePattern,
            '<br/><strong>$1</strong>'
        );

        return formatted;
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-12 text-white">
            <div className="w-3/4 mx-auto pt-20 px-12">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Recommended Colleges</h2>

                {/* Grid Layout: 2 rows and 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.map((college, index) => {
                        // Extract college name and summary
                        const collegeSummaries = college.response?.college_summaries || {};
                        const collegeName = Object.keys(collegeSummaries)[0]; // First key in `college_summaries`
                        const description = collegeSummaries[collegeName]; // Corresponding description

                        return (
                            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                                {/* College Name */}
                                <h3 className="text-2xl font-bold text-indigo-300 mb-4">{collegeName || 'Unknown College'}</h3>
                                {/* College Description */}
                                <p
                                    className="text-gray-400 text-sm"
                                    dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OutputPage;

