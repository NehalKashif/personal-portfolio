'use client';

import React from 'react';
import { Home as HomeIcon, User, Briefcase, Mail, Menu, X, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: HomeIcon },
    { href: '#about', label: 'About', icon: User },
    { href: '#experience', label: 'Experience', icon: Award },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 to-black relative overflow-hidden">
      <Background />
      <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navItems={navItems} />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
