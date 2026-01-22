'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black bg-linear-to-r from-yellow-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4" style={{
            fontWeight: 900,
            letterSpacing: '0.05em'
          }}>
            About Me
          </h2>
          <p className="text-xl text-gray-300">Get to know me better</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
               <Image
                 src="/aboutImg2.png"
              alt="Nehal Kashif"
              width={320}
              height={320}
              className="w-80 h-80 rounded-full object-cover border-4 border-gray-300 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-white leading-relaxed mb-6">
              I'm <span className="text-yellow-400 font-semibold">Nehal Kashif</span>, a passionate Frontend Developer who transforms ideas into stunning, responsive web experiences. With a keen interest in Data Science and Python, I blend creativity with logic to build interfaces that not only look beautiful but work seamlessly across all devices.
            </p>
            <p className="text-lg text-white leading-relaxed mb-6">
              From pixel-perfect designs to interactive animations, I craft digital solutions using <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and modern CSS frameworks. I'm fascinated by how data tells stories and how code transforms those stories into actionable insights. Whether it's building an intuitive UI or analyzing complex datasets, I approach every project with precision and innovation.
            </p>
            <div className="mt-8">
              <h3 className="text-3xl font-black bg-linear-to-r from-yellow-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">Education</h3>
              <div className="relative">
                <div className="border-l-4 border-gradient-to-b from-blue-400 to-purple-500 pl-8 space-y-8">
                  <div className="relative group">
                    <div className="absolute -left-12 w-6 h-6 bg-linear-to-r from-blue-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-600 group-hover:border-blue-400">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">Bachelor of Science in Software Engineering</h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Comsats University Islamabad, 2023-2027</p>
                    </div>
                  </div>
                  {/* Add more education items here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;