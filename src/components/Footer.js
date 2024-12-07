import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2024 MyCollegeWishlistAI. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Twitter</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;