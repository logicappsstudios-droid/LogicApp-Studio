/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Layers, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand the problem deeply, analyze user needs, and define a clear product vision.',
      icon: Compass
    },
    {
      number: '02',
      title: 'Design & Develop',
      description: 'Transform concepts into thoughtful digital experiences with meticulous engineering and design.',
      icon: Layers
    },
    {
      number: '03',
      title: 'Refine',
      description: 'Continuously polish and improve usability, overall quality, and technical performance.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-semibold tracking-wider uppercase">
              <span>Our Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              From Ideas to Experiences
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              A structured, human-centric approach ensuring every project is built with clarity, purpose, and excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Desktop connecting horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <div 
                    className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full"
                  >
                    <div>
                      {/* Step badge & icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-extrabold text-blue-600 font-mono">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                      <span>STAGE {step.number} OF 03</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
