import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from 'next/link';
import { generateArticleSchema } from '../../../lib/schema';
import { SITE_CONFIG } from '../../../lib/constants';
import { ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Photo & Signature Size Guidelines for Govt Exams & Passports (2026)',
  description: 'Master reference table for official photo and signature size specifications for UPSC, SSC, NEET, JEE, Passport, Visa, and State PSC portals.',
  keywords: ['upsc photo size', 'ssc photo size', 'neet photo size', 'passport photo 50kb', 'signature 20kb size requirements'],
};

export default function ExamGuidePage() {
  const articleSchema = generateArticleSchema(
    'Official Photo & Signature Size Guidelines for Govt Exams & Passports',
    'A complete specification table of dimensions, file size limits, and DPI requirements for official application portals.',
    `${SITE_CONFIG.url}/guides/image-size-requirements-government-exams`,
    '2026-02-01'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        <Breadcrumbs
          items={[
            { name: 'Guides', href: '/guides/how-image-compression-works' },
            { name: 'Exam & Portal Guidelines', href: '/guides/image-size-requirements-government-exams' },
          ]}
        />

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <header className="space-y-4 border-b border-slate-200 pb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Application Portal Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Official Photo & Signature Requirements for Portals & Exams
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Never get your online application rejected due to file size errors. Use this verified 2026 master table to instantly format your candidate photograph, signature, and left thumb impression.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              1. Master Specifications by Examination & Portal
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Portal / Examination</th>
                    <th className="py-3 px-4">Photo Size (KB)</th>
                    <th className="py-3 px-4">Signature Size (KB)</th>
                    <th className="py-3 px-4">Dimensions / Specs</th>
                    <th className="py-3 px-4">Quick Tool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">UPSC (Civil Services, NDA, CDS)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">20 KB – 300 KB</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">20 KB – 300 KB</td>
                    <td className="py-3 px-4">350 x 350 px min</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-100kb" className="text-emerald-600 font-bold hover:underline">
                        To 100KB
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">SSC (CGL, CHSL, MTS, GD)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">20 KB – 50 KB</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">10 KB – 20 KB</td>
                    <td className="py-3 px-4">3.5cm x 4.5cm</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-20kb" className="text-emerald-600 font-bold hover:underline">
                        To 20KB
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">NTA NEET (UG)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">10 KB – 200 KB (Passport)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">4 KB – 30 KB</td>
                    <td className="py-3 px-4">White background, 80% face</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-50kb" className="text-emerald-600 font-bold hover:underline">
                        To 50KB
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">JEE Main / Advanced</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">10 KB – 200 KB</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">4 KB – 30 KB</td>
                    <td className="py-3 px-4">JPG format only</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-50kb" className="text-emerald-600 font-bold hover:underline">
                        To 50KB
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">IBPS Bank PO / Clerk</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">20 KB – 50 KB</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">10 KB – 20 KB</td>
                    <td className="py-3 px-4">200 x 230 px (Photo)</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-20kb" className="text-emerald-600 font-bold hover:underline">
                        To 20KB
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Indian Passport Seva / NRI</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Under 100 KB</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Under 50 KB</td>
                    <td className="py-3 px-4">2 x 2 inches / White BG</td>
                    <td className="py-3 px-4">
                      <Link href="/compress-image-to-50kb" className="text-emerald-600 font-bold hover:underline">
                        To 50KB
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              2. Three Rules to Avoid Rejection
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Clear Plain Background:</strong> Most official authorities require a white or light-colored background. Never upload photos with patterned walls or outdoors scenery.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Black Ink on White Paper for Signatures:</strong> Signatures should be executed with a dark black or blue ballpoint pen on plain white unlined paper before taking a photo or scan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Byte Caps:</strong> If a portal demands "Max 50KB", a file of 50.4KB will be rejected by the validation script. PixelShrink guarantees that the file is strictly equal to or smaller than your chosen limit.
                </span>
              </li>
            </ul>
          </section>

          <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4">
            <Link
              href="/compress-image-to-20kb"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              <span>Compress Signature to 20KB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/compress-image-to-50kb"
              className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-emerald-600 transition-colors inline-flex items-center gap-2"
            >
              <span>Compress Photo to 50KB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
