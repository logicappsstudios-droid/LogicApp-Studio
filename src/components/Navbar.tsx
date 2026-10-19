/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Logo & Title */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5"
          >
            <BrandLogo isDark={!isScrolled} />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-blue-500 cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-blue-500 cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-blue-500 cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-blue-500 cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center shrink-0">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-blue-600"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-blue-600"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-blue-600"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-blue-600"
          >
            Contact
          </button>
          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
