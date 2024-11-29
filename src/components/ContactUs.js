import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white py-20">
            <div className="max-w-4xl mx-auto p-8 bg-black/40 rounded-lg shadow-2xl">
                <h2 className="text-5xl font-extrabold text-center text-cyan-300 mb-8">Contact Us</h2>
                <p className="text-center text-xl text-gray-300 mb-12">
                    We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 rounded-md text-gray-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 rounded-md text-gray-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg text-gray-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="mt-2 p-3 rounded-md text-gray-800"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 py-3 px-8 rounded-full text-lg font-semibold shadow-2xl hover:shadow-neon transition-transform transform hover:scale-110"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;