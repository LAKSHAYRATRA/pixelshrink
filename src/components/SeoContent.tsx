'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ToolConfig } from '../lib/types';
import { ALL_TOOLS } from '../lib/constants';
import { ChevronDown, ArrowRight, ShieldCheck, Check, Layers, Cpu } from 'lucide-react';

interface SeoContentProps {
  tool: ToolConfig;
}

export default function SeoContent({ tool }: SeoContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const relatedTools = ALL_TOOLS.filter((t) =>
    tool.relatedToolSlugs.includes(t.slug || 'compressor') ||
    (tool.slug === '' && ['compress-jpg', 'compress-image-to-50kb', 'resize-image', 'png-to-jpg'].includes(t.slug))
  );

  return (
    <div className="mt-12 space-y-10 text-slate-800">
      {/* 1. Operating Instructions */}
      <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
          Using {tool.shortTitle}
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Follow these steps to process your image locally on your device.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {tool.howToSteps.map((step, index) => (
            <div
              key={index}
              id={`step-${index + 1}`}
              className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Step {index + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-1 mb-1.5">
                  {step.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Technical Specifications & Architecture */}
      <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Technical Overview: {tool.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            Compression algorithms, color quantization, and browser execution details
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          {tool.articleContent.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                {section.heading}
              </h3>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Compression Benchmark Table */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Real-World File Size Reduction Benchmarks
          </h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Input Type</th>
                  <th className="py-2.5 px-3">Input Size</th>
                  <th className="py-2.5 px-3">Output Target</th>
                  <th className="py-2.5 px-3">Reduction</th>
                  <th className="py-2.5 px-3">Visual Preservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium text-slate-800">Phone Camera Photo (JPEG)</td>
                  <td className="py-2.5 px-3">4.2 MB</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">480 KB</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">-88%</td>
                  <td className="py-2.5 px-3 font-sans text-slate-600">No noticeable loss on 4K screen</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium text-slate-800">Software Screenshot (PNG)</td>
                  <td className="py-2.5 px-3">1.8 MB</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">320 KB</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">-82%</td>
                  <td className="py-2.5 px-3 font-sans text-slate-600">Crisp UI text edges</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium text-slate-800">Official Exam Signature</td>
                  <td className="py-2.5 px-3">280 KB</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">18.5 KB</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">-93%</td>
                  <td className="py-2.5 px-3 font-sans text-slate-600">Clean black ink contrast</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium text-slate-800">Passport Photo (DS-160 / SSC)</td>
                  <td className="py-2.5 px-3">1.2 MB</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">46.2 KB</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">-96%</td>
                  <td className="py-2.5 px-3 font-sans text-slate-600">Meets strict biometric requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Points */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Engine Capabilities &amp; Verification
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {tool.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Frequently Asked Questions */}
      <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Answers to technical, privacy, and formatting questions about {tool.shortTitle}
        </p>

        <div className="divide-y divide-slate-100">
          {tool.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full text-left font-semibold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-slate-600 leading-relaxed text-xs sm:text-sm pr-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Related Tools Directory */}
      <section className="p-6 rounded-xl bg-slate-100/70 border border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Related Tools &amp; Converters
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relatedTools.map((relTool) => (
            <Link
              key={relTool.slug}
              href={`/${relTool.slug}`}
              className="p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {relTool.shortTitle}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                  {relTool.subheading}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                <span>Open tool</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
