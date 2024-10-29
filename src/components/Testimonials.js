import React from 'react';

const testimonials = [
    { name: 'John Doe', quote: 'AI helped me find the perfect college. The recommendations were spot-on!' },
    { name: 'Jane Smith', quote: 'This platform made my college search so easy and accurate!' },
];

const Testimonials = () => {
    return (
        <div className="bg-gray-50 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg italic">"{testimonial.quote}"</p>
                        <p className="mt-4 text-blue-700 font-semibold">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;