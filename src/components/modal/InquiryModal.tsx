'use client';

import React, { useState } from 'react';
import { Template } from '@/types';
import { X, Check, Copy } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate?: Template | null;
  selectedLicense?: 'standard' | 'extended';
  currency: 'THB' | 'USD';
}

export default function InquiryModal({
  isOpen,
  onClose,
  selectedTemplate,
  selectedLicense = 'standard',
}: InquiryModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [lineId, setLineId] = useState('');
  const [notes, setNotes] = useState('');
  const [license, setLicense] = useState<'standard' | 'extended'>(selectedLicense);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);

  if (!isOpen) return null;

  const handleCopyLine = () => {
    navigator.clipboard.writeText('@artydev');
    setCopiedLine(true);
    setTimeout(() => setCopiedLine(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0f111a] border border-zinc-200 dark:border-white/10 rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto transition-colors">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[10px] uppercase text-zinc-500 mb-1">
                Direct Inquiry
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white transition-colors">
                {selectedTemplate ? selectedTemplate.title : 'Marketplace Apps Source Code'}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 transition-colors">
                Fill in your contact details or reach out via Line OA for immediate response.
              </p>
            </div>

            {/* Line Banner */}
            <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 transition-colors">
              <div className="text-xs">
                <div className="text-zinc-800 dark:text-zinc-200 font-medium">Quick Line Contact:</div>
                <div className="font-mono text-zinc-500 dark:text-zinc-400 text-[11px]">@artydev</div>
              </div>

              <button
                type="button"
                onClick={handleCopyLine}
                className="px-2.5 py-1 rounded bg-zinc-200/80 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedLine ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedLine ? 'Copied' : 'Copy ID'}</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              
              {/* License Selection */}
              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
                  License Tier
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLicense('standard')}
                    className={`p-2 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                      license === 'standard'
                        ? 'bg-zinc-100 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600 text-zinc-950 dark:text-white font-medium shadow-2xs'
                        : 'bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <div className="font-semibold text-zinc-900 dark:text-white">Standard</div>
                    <div className="text-[10px] text-zinc-500 font-mono">1 Project</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLicense('extended')}
                    className={`p-2 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                      license === 'extended'
                        ? 'bg-zinc-100 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600 text-zinc-950 dark:text-white font-medium shadow-2xs'
                        : 'bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <div className="font-semibold text-zinc-900 dark:text-white">Extended</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Unlimited</div>
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
                  Name / Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John or Acme Ltd."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-600"
                />
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email@domain.com"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
                    Line ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your LINE ID"
                    value={lineId}
                    onChange={(e) => setLineId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-600"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1">
                  Project Notes / Custom Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your timeline or custom setup needs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-xs"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Inquiry Received</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
              Thank you. We will get back to you shortly at <span className="text-zinc-900 dark:text-zinc-200 font-mono font-medium">{contact}</span>.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs dark:hover:bg-zinc-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
