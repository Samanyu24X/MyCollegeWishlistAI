import React from 'react';
import Typed from 'react-typed';

const HeroSection = () => {
    return (
        <div className="text-white bg-gradient-to-r from-blue-800 to-purple-700 py-20 px-4 text-center">
            <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH AI & DATA ANALYTICS</p>

                <h1 className="md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6">
                    Revolutionize Your College Search with AI
                </h1>

                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Personalized, flexible recommendations for
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['College Apps', 'Scholarships', 'Career Paths']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>

                <p className='md:text-2xl text-xl font-bold text-gray-200'>
                    Experience personalized recommendations driven by AI for college and career success.
                </p>

                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00bf8a] transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default HeroSection;