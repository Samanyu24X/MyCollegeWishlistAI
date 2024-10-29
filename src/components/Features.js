import React from 'react';

const features = [
    { title: 'AI Recommendations', description: 'Get personalized college matches based on your profile.' },
    { title: 'Real-time Data', description: 'Stay updated with the latest application deadlines and stats.' },
    { title: 'Predictive Analysis', description: 'AI-driven predictions on the best-fit schools for you.' },
];

const FeaturesSection = () => {
    return (
        <div className="py-12 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">AI-Powered Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-700">{feature.title}</h3>
                        <p className="mt-4 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;