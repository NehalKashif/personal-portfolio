'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 pt-24" style={{perspective: '1000px', transformStyle: 'preserve-3d'}}>
      <div className="text-center max-w-4xl mx-auto transform rotateX-6 rotateY-6 hover:rotateX-0 hover:rotateY-0 transition-transform duration-700 ease-out">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
            Nehal Kashif
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          A passionate <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold">Software Engineer</span> and <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold">Frontend web developer</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-linear-to-r from-blue-800 to-black text-white font-semibold rounded-full hover:bg-linear-to-r hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-linear-to-r hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
            Get In Touch
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;