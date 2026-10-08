import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service - Conditions of Use',
  description: 'Terms of Service for PixelShrink. Understand the conditions, acceptable use, and disclaimer of warranties for our free image tool suite.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms' }]} />

      <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Terms & Conditions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </header>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using {SITE_CONFIG.name} ({SITE_CONFIG.domain}), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
          </p>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Permitted Use
          </h2>
          <p>
            {SITE_CONFIG.name} is provided free of charge for personal, educational, and commercial purposes. You are free to optimize, resize, and convert images for websites, job applications, government portals, or commercial media without licensing fees.
          </p>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Disclaimer of Warranties
          </h2>
          <p>
            The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. While our client-side algorithms strive for mathematically precise size constraints, {SITE_CONFIG.name} does not warrant that the service will meet your specific portal requirements without exception. Users are responsible for confirming file properties prior to formal submission.
          </p>
        </section>

        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall {SITE_CONFIG.name} or its operators be liable for any damages arising out of the use or inability to use the tools on this website.
          </p>
        </section>
      </article>
    </div>
  );
}
