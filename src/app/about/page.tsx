import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../lib/constants';
import { ShieldCheck, Zap, Globe, Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - The Privacy-First Image Optimization Mission',
  description: 'Learn about PixelShrink: why we built a zero-server, client-side image utility suite that respects your privacy and optimizes web performance.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: 'About Us', href: '/about' }]} />

      <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Our Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About PixelShrink
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe that manipulating everyday media files on the internet should be fast, completely free, and 100% private.
          </p>
        </header>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            Why We Built PixelShrink
          </h2>
          <p>
            For years, the standard way to compress or convert an image online was to visit a bloated tool site, upload your private document to an unknown remote server, navigate a minefield of deceptive download buttons, and wait for the remote server to process your file.
          </p>
          <p>
            When users need to reduce a photo to 50KB for an official government examination, passport renewal, or job application, they are often uploading sensitive identity documents: photos of their face, signatures, educational certificates, or government ID cards. Uploading these to cloud servers represents an unnecessary security and privacy risk.
          </p>
          <p>
            <strong>PixelShrink re-architected this paradigm.</strong> Using modern HTML5 Canvas, Web Workers, and WebAssembly APIs, all computational compression is handled on your local device hardware.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Zero File Transmission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your images never leave your computer or phone. No uploads, no storage, no tracking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Zero Wait Queues</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compression completes in milliseconds using local CPU execution without server throttling.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Unlimited & Free</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Batch process dozens of photos simultaneously with 1-click ZIP archiving at zero cost.
            </p>
          </div>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">
            Our Engineering Philosophy
          </h2>
          <p>
            We adhere to strict standards of web performance and accessible design. Our web application loads in under one second, produces zero layout shifts, and operates smoothly even on lower-end mobile devices and slower cellular connections.
          </p>
        </section>
      </article>
    </div>
  );
}
