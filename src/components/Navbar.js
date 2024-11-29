import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom

const Navbar = () => {
    return (
        <nav className="bg-gray-900 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold">
                            MyCollegeWishlistAI
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Home
                            </Link>
                            <Link to="/services" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Services
                            </Link>
                            <Link to="/about-us" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;