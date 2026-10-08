import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from 'next/link';
import { generateArticleSchema } from '../../../lib/schema';
import { SITE_CONFIG } from '../../../lib/constants';
import { ArrowRight, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JPG vs PNG vs WebP: Which Format Should You Use in 2026?',
  description: 'Complete comparison of JPEG, PNG, and WebP. Learn the key differences in file size, transparency, visual fidelity, and web performance SEO.',
  keywords: ['jpg vs png vs webp', 'best image format for web', 'png vs jpeg', 'webp vs jpg', 'next gen image format'],
};

export default function FormatComparisonGuide() {
  const articleSchema = generateArticleSchema(
    'JPG vs PNG vs WebP: Which Format Should You Use?',
    'A definitive guide to choosing between JPEG, PNG, and WebP for websites, photography, and documents.',
    `${SITE_CONFIG.url}/guides/jpg-vs-png-vs-webp`,
    '2026-01-20'
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
            { name: 'JPG vs PNG vs WebP', href: '/guides/jpg-vs-png-vs-webp' },
          ]}
        />

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <header className="space-y-4 border-b border-slate-200 pb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Format Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              JPG vs PNG vs WebP: The Definitive Comparison
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Choosing the wrong image format can bloat page load times by 400% or ruin crisp logos with muddy compression artifacts. Here is how to pick the right format every single time.
            </p>
          </header>

          {/* Master Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">JPEG (.jpg)</th>
                  <th className="py-3 px-4">PNG (.png)</th>
                  <th className="py-3 px-4 text-emerald-700 font-extrabold">WebP (.webp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-semibold">Compression Type</td>
                  <td className="py-3 px-4">Lossy</td>
                  <td className="py-3 px-4">Lossless</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">Lossy & Lossless</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Alpha Transparency</td>
                  <td className="py-3 px-4 text-red-500 font-semibold">No</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (Full 8-bit alpha)</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (Full 8-bit alpha)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Average File Size</td>
                  <td className="py-3 px-4">Small</td>
                  <td className="py-3 px-4">Large to Very Large</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">Smallest (25-34% &lt; JPG)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Animation Support</td>
                  <td className="py-3 px-4 text-red-500 font-semibold">No</td>
                  <td className="py-3 px-4 text-slate-400">APNG (Limited)</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Browser Support</td>
                  <td className="py-3 px-4">100% Universal</td>
                  <td className="py-3 px-4">100% Universal</td>
                  <td className="py-3 px-4">97%+ (All Modern Browsers)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Ideal Use Case</td>
                  <td className="py-3 px-4">Photographs, Camera shots</td>
                  <td className="py-3 px-4">Logos, Icons, Text, Transparent UI</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">All Modern Web Publishing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              When to Choose JPEG
            </h2>
            <p>
              JPEG remains the global standard for complex photography with rich gradients, intricate colors, and real-world scenes. Because photographic images rarely have pixel-perfect sharp boundaries, JPEG's frequency quantization slashes file sizes by up to 90% without visible loss.
            </p>
            <p className="font-semibold text-slate-800">
              Best for: Blog hero photos, product catalogs, photo albums, email attachments.
            </p>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              When to Choose PNG
            </h2>
            <p>
              PNG is a lossless raster format created to replace GIF. It excels at rendering sharp geometric edges, text, vector-like illustrations, and translucent drop-shadows. When JPEG attempts to compress text or hard lines, it creates "mosquito noise" ringing artifacts. PNG prevents this completely.
            </p>
            <p className="font-semibold text-slate-800">
              Best for: Brand logos, software screenshots, app icons, badges, transparent stickers.
            </p>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              When to Choose WebP
            </h2>
            <p>
              WebP combines the best aspects of JPEG and PNG. It supports both lossy photo compression AND transparent alpha channels. According to Google Web Fundamentals, converting standard JPEGs to WebP reduces file size by an average of 30%, which translates directly to higher Google PageSpeed scores and lower mobile bounce rates.
            </p>
            <p className="font-semibold text-slate-800">
              Best for: Next-gen websites, responsive web apps, high-speed e-commerce stores.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4">
            <Link
              href="/compress-jpg"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold text-xs border border-slate-200 transition-colors"
            >
              Compress JPG
            </Link>
            <Link
              href="/compress-png"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold text-xs border border-slate-200 transition-colors"
            >
              Compress PNG
            </Link>
            <Link
              href="/compress-webp"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold text-xs border border-slate-200 transition-colors"
            >
              Compress WebP
            </Link>
            <Link
              href="/png-to-jpg"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
            >
              Convert PNG to JPG
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
