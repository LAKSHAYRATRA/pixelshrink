import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../lib/constants';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - 100% Client-Side Data Protection',
  description: 'PixelShrink Privacy Policy. We do not store, view, or upload your photos. Learn how our zero-server architecture guarantees complete user privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </header>

        <section className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-bold text-emerald-950 text-base">
              The PixelShrink Privacy Pledge
            </h3>
            <p className="text-sm text-emerald-800 leading-relaxed">
              We do not upload, collect, or store your photos. All image processing operations (compression, resizing, format conversion) are executed strictly inside your local web browser sandbox using client-side JavaScript. Your files never travel across the internet.
            </p>
          </div>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Information We Do Not Collect
          </h2>
          <p>
            Unlike traditional file conversion services, PixelShrink operates without a backend media server. As a direct consequence:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not have access to any image, document, or graphic file you drag into the application.</li>
            <li>We do not record EXIF metadata, GPS locations, camera models, or timestamps embedded within your photos.</li>
            <li>We do not maintain databases of converted files or user uploads.</li>
          </ul>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Web Analytics and Log Data
          </h2>
          <p>
            Like virtually all websites, we may collect anonymous, non-personally identifiable log information when you access our service. This may include your browser type, device operating system, language preferences, referring URLs, and timestamps. We utilize this aggregate data solely to troubleshoot technical errors and improve user experience.
          </p>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Cookies and Advertising Partners (Google AdSense)
          </h2>
          <p>
            We may partner with third-party advertising networks, such as Google AdSense, to serve advertisements when you visit our website. These companies may use cookies, web beacons, and similar tracking technologies to serve ads based on your prior visits to this or other websites across the Internet:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to our sites and other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com).
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            4. GDPR & CCPA Rights
          </h2>
          <p>
            Because we do not store, process, or sell personal identifiers or user images, there is no database of personal information to request deletion of. However, in full accordance with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you retain the right to inquire about data practices by contacting us directly.
          </p>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed border-t border-slate-200 pt-6">
          <h2 className="text-2xl font-bold text-slate-900">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please reach out to our team at support@{SITE_CONFIG.domain}.
          </p>
        </section>
      </article>
    </div>
  );
}
