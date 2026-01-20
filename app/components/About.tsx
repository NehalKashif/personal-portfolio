'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4" style={{
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
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-yellow-400 font-semibold">Nehal Kashif</span>, a passionate Frontend Developer who transforms ideas into stunning, responsive web experiences. With a keen interest in Data Science and Python, I blend creativity with logic to build interfaces that not only look beautiful but work seamlessly across all devices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From pixel-perfect designs to interactive animations, I craft digital solutions using <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and modern CSS frameworks. I'm fascinated by how data tells stories and how code transforms those stories into actionable insights. Whether it's building an intuitive UI or analyzing complex datasets, I approach every project with precision and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;