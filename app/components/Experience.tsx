'use client';

import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Axcelerate.Ai.',
      location: 'Lahore, Pakistan',
      period: 'Aug 2025 - Sep 2025',
      description: 'Performed large-scale data annotation for machine learning training datasets, ensuring accuracy and consistency. Assisted in data collection and organization, preparing datasets for model training and evaluation.',
      skills: ['Python', 'OpenCV', 'Roboflow']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black bg-linear-to-r from-yellow-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4" style={{
            fontWeight: 900,
            letterSpacing: '0.05em'
          }}>
            Experience
          </h2>
          <p className="text-xl text-gray-300">My professional journey and achievements</p>
        </div>

        <div className="relative">
          <div className="border-l-4 border-gradient-to-b from-blue-400 to-purple-500 pl-8 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-12 w-6 h-6 bg-linear-to-r from-blue-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-700 group-hover:border-blue-400">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 group-hover:text-yellow-300 transition-colors duration-300">{exp.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 mb-3">
                    <Award className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="font-semibold">{exp.company}</span>
                    <MapPin className="w-4 h-4 ml-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;