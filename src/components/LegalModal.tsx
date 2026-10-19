/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white shadow-2xl relative max-h-[85vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-4 text-slate-300 text-sm leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-xs text-blue-400 font-mono">Last updated: October 2026</p>
              <p>
                LogicApp Studios respects your privacy. This Privacy Policy outlines our commitment to protecting your personal information when you visit our website or interact with our software studio brand.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Information Collection</h4>
              <p>
                We collect only minimal information voluntarily provided through our contact form (such as name, email address, and message content) solely for responding to inquiries and communications.
              </p>
              <h4 className="font-semibold text-white pt-2">2. Data Security & Usage</h4>
              <p>
                Your information is never sold, traded, or shared with third parties for marketing purposes. We maintain rigorous standards to ensure secure handling of all studio communications.
              </p>
              <h4 className="font-semibold text-white pt-2">3. Contact</h4>
              <p>
                If you have any questions regarding this Privacy Policy, please reach out via our official contact email at logicappsstudios@gmail.com.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs text-blue-400 font-mono">Last updated: October 2026</p>
              <p>
                Welcome to LogicApp Studios. By accessing our website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Intellectual Property</h4>
              <p>
                All content, branding, logos, graphics, and design assets on this website are the intellectual property of LogicApp Studios unless otherwise stated. All rights reserved.
              </p>
              <h4 className="font-semibold text-white pt-2">2. Brand Representation</h4>
              <p>
                This website represents the professional software development brand of LogicApp Studios. Visitors are permitted to view website content for informational purposes.
              </p>
              <h4 className="font-semibold text-white pt-2">3. Limitation of Liability</h4>
              <p>
                LogicApp Studios provides this website on an "as is" basis without warranties of any kind, whether express or implied.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
