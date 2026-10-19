/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network latency / email service transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Let’s Build Something Meaningful.
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Have a question, an idea, or an opportunity to collaborate? Get in touch with LogicApp Studios. We are always open to discussing new software ideas and professional opportunities.
                </p>
              </div>
            </ScrollReveal>

            {/* Official Contact Info */}
            <ScrollReveal delay={150}>
              <div className="space-y-6 pt-4 border-t border-slate-800">
                
                {/* Official Contact Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Official Contact Email</h3>
                    <a href="mailto:logicappsstudios@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      logicappsstudios@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Primary channel for studio inquiries</p>
                  </div>
                </div>

                {/* Integration Note */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300 block mb-1">Backend Integration Notice:</span>
                  This contact form simulates transmission. To receive live submissions in production, connect this form to an email service provider (e.g., SendGrid, Formspree, or custom server endpoint).
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Received</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to LogicApp Studios. Your message has been validated successfully. We will review your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Your Name <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={`w-full px-4 py-3 bg-slate-900 border ${
                            errors.name ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                          } rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Email Address <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={`w-full px-4 py-3 bg-slate-900 border ${
                            errors.email ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                          } rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Subject <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration Inquiry"
                        className={`w-full px-4 py-3 bg-slate-900 border ${
                          errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                        } rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Message <span className="text-blue-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className={`w-full px-4 py-3 bg-slate-900 border ${
                          errors.message ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                        } rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
