/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';

function PlayStoreIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.86-1.35V3.164a1.5 1.5 0 0 1 .859-1.35z" fill="#00f076" />
      <path d="M17.316 15.525l-3.524-3.525L3.609 22.186c.414.417 1.054.455 1.512.088l12.195-6.749z" fill="#ffcd00" />
      <path d="M17.316 8.475L5.121 1.726c-.458-.367-1.098-.329-1.512.088L13.792 12l3.524-3.525z" fill="#ea4335" />
      <path d="M17.316 8.475l3.297 1.824c.732.405.732 1.258 0 1.663l-3.297 1.824L13.792 12l3.524-3.525z" fill="#4285f4" />
    </svg>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decorative Glow Accents & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Small Heading */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Apps for a Better Everyday</span>
          </div>

          {/* Main Heading matching image style */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            LogicApp <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Studios</span>
          </h1>

          {/* Description matching image copy */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            We create simple, useful and innovative Android apps to make your everyday life easier, smarter and more productive.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-6.5 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
            >
              <span>About Our Studio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a 
              href="https://play.google.com/store/apps/developer?id=LogicApp+Studios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6.5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-black/30 cursor-pointer backdrop-blur-sm group"
            >
              <PlayStoreIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>View on Play Store</span>
            </a>

            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6.5 py-3.5 text-sm font-semibold text-slate-300 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          {/* Key Brand Values Quick Strip */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-xl text-slate-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="font-medium text-slate-300">Independent Studio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="font-medium text-slate-300">Crafted Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span className="font-medium text-slate-300">User-Focused</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Technology Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-slate-800/80 p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between animate-float-slow">
            
            {/* Top card telemetry header */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>LOGICAPP.CORE_ARCH</span>
              </div>
              <span className="text-cyan-400 font-semibold">ACTIVE</span>
            </div>

            {/* Center Geometric Graphic */}
            <div className="relative my-auto py-6 flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border border-blue-500/20 animate-ping opacity-25" />
              <div className="absolute w-36 h-36 rounded-full border border-cyan-400/30" />
              
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-xl shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Layers className="w-12 h-12 text-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Floating orbital nodes */}
              <div className="absolute -top-2 left-10 px-3 py-1 bg-slate-900/90 border border-blue-500/30 rounded-lg text-[10px] font-mono text-blue-300 shadow-md">
                Design & Code
              </div>
              <div className="absolute -bottom-2 right-8 px-3 py-1 bg-slate-900/90 border border-cyan-500/30 rounded-lg text-[10px] font-mono text-cyan-300 shadow-md">
                Innovation
              </div>
            </div>

            {/* Bottom abstract tech metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5">Philosophy</span>
                <span className="text-slate-200 font-semibold">Purpose & Simplicity</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Standard</span>
                <span className="text-slate-200 font-semibold">Crafted Excellence</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
