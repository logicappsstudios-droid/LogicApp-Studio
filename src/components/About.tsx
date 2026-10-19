/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Exploring new ideas and modern technologies to create forward-looking digital solutions.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality',
      description: 'Building polished, reliable digital experiences with attention to detail and robust engineering.'
    },
    {
      icon: HeartHandshake,
      title: 'User-Focused Design',
      description: 'Prioritizing usability, simplicity, and accessibility so technology feels natural and effortless.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              About LogicApp Studios
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              LogicApp Studios is an independent software development brand focused on building meaningful digital experiences. We combine creative thinking, modern technology, and a commitment to quality to develop solutions designed around real-world needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <div 
                  className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>0{index + 1} // STUDIO PILLAR</span>
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
