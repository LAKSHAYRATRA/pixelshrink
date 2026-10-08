import type { Metadata } from 'next';
import { ALL_TOOLS } from '../lib/constants';
import ToolWorkspace from '../components/ToolWorkspace';
import SeoContent from '../components/SeoContent';
import { generateWebApplicationSchema, generateHowToSchema, generateFaqSchema } from '../lib/schema';
import Link from 'next/link';

const tool = ALL_TOOLS[0];

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
  keywords: tool.keywords,
};

export default function HomePage() {
  const webAppSchema = generateWebApplicationSchema(tool);
  const howToSchema = generateHowToSchema(tool);
  const faqSchema = generateFaqSchema(tool.faqs);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-8">
        {/* Header / Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pt-2 pb-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Compress Image to KB Online
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reduce image file size to your exact target KB limit in seconds. Enter any kilobyte cap (e.g. 20KB, 50KB, 100KB) and compress locally in your browser with zero quality degradation and zero server uploads.
          </p>

          {/* Quick Target Links */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-1.5 text-xs">
            <span className="text-slate-400 mr-1">Direct presets:</span>
            <Link
              href="/compress-image-to-20kb"
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md transition-colors"
            >
              20 KB (Signatures)
            </Link>
            <Link
              href="/compress-image-to-50kb"
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md transition-colors"
            >
              50 KB (Passport &amp; SSC)
            </Link>
            <Link
              href="/compress-image-to-100kb"
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md transition-colors"
            >
              100 KB (UPSC &amp; Forms)
            </Link>
            <Link
              href="/compress-image-to-200kb"
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md transition-colors"
            >
              200 KB (Web &amp; Email)
            </Link>
          </div>
        </div>

        {/* Core Tool Interactive Workspace */}
        <ToolWorkspace tool={tool} />

        {/* Editorial SEO Articles & FAQ Accordion */}
        <SeoContent tool={tool} />
      </div>
    </>
  );
}
