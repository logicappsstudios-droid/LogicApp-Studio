/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Smartphone, Palette, Code2, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Creating mobile experiences with a focus on usability, performance, and reliability across modern platforms.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and smooth user journeys that combine aesthetic elegance with functional clarity.'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Building practical digital solutions and software systems tailored for different needs and technical environments.'
    },
    {
      icon: Sparkles,
      title: 'Product Innovation',
      description: 'Turning raw concepts and initial ideas into thoughtfully designed, market-ready digital products.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold tracking-wider uppercase">
              <span>Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Specialized capabilities dedicated to building robust, thoughtful, and high-performance software products.
            </p>
          </div>
        </ScrollReveal>

        {/* Four Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 120}>
                <div 
                  className="group bg-white border border-slate-200/80 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>SERVICE_0{index + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
