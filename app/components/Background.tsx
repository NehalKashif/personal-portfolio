'use client';

import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-500/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-500/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-500/15 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>

      {/* Additional Bubbles */}
      <div className="absolute top-10 right-1/4 w-18 h-18 bg-green-500/15 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-1/3 left-16 w-22 h-22 bg-orange-500/12 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute top-3/4 right-32 w-14 h-14 bg-teal-500/18 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute bottom-10 left-1/3 w-26 h-26 bg-violet-500/14 rounded-full animate-pulse" style={{animationDelay: '3.2s'}}></div>
      <div className="absolute top-1/4 left-2/3 w-12 h-12 bg-rose-500/20 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute bottom-2/3 right-1/4 w-30 h-30 bg-emerald-500/10 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-2/3 left-10 w-16 h-16 bg-amber-500/16 rounded-full animate-ping" style={{animationDelay: '2.8s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-lime-500/13 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
    </div>
  );
};

export default Background;