/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrandLogo } from './Logo';
import { LegalModal } from './LegalModal';
import { Mail } from 'lucide-react';

export function Footer() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="group inline-block"
            >
              <BrandLogo isDark={true} />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              LogicApp Studios is an independent software development brand dedicated to creating thoughtful digital experiences through technology, creativity, and innovation.
            </p>
            <div className="pt-2">
              <a 
                href="https://play.google.com/store/apps/developer?id=LogicApp+Studios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white text-xs font-semibold transition-colors group"
              >
                <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.86-1.35V3.164a1.5 1.5 0 0 1 .859-1.35z" fill="#00f076" />
                  <path d="M17.316 15.525l-3.524-3.525L3.609 22.186c.414.417 1.054.455 1.512.088l12.195-6.749z" fill="#ffcd00" />
                  <path d="M17.316 8.475L5.121 1.726c-.458-.367-1.098-.329-1.512.088L13.792 12l3.524-3.525z" fill="#ea4335" />
                  <path d="M17.316 8.475l3.297 1.824c.732.405.732 1.258 0 1.663l-3.297 1.824L13.792 12l3.524-3.525z" fill="#4285f4" />
                </svg>
                <span>Google Play Store</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholder Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:logicappsstudios@gmail.com" className="hover:text-white transition-colors">
                  logicappsstudios@gmail.com
                </a>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Official studio inquiries, collaborations, and software development discussions.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} LogicApp Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button 
              onClick={() => setLegalModalType('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      <LegalModal 
        isOpen={legalModalType !== null} 
        onClose={() => setLegalModalType(null)} 
        type={legalModalType || 'privacy'} 
      />
    </footer>
  );
}
