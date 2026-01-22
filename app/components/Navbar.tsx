'use client';

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Home as HomeIcon, User, Briefcase, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  navItems: { href: string; label: string; icon: React.ComponentType<any> }[];
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMenuOpen, setIsMenuOpen, navItems }) => {

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-lg shadow-2xl shadow-blue-500/20 border-b border-blue-500/30'
        : 'bg-linear-to-r from-blue-900/40 to-black/40 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                <span className="text-black font-bold text-lg">N</span>
              </div>
              <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            </div>
            <div className="text-white font-bold text-xl transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-105">
              Nehal Kashif
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 group rounded-lg hover:bg-white/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="font-medium">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
              </div>
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-400/50 to-transparent animate-pulse"></div>
    </nav>
  );
};

export default Navbar;