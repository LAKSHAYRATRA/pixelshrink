import React from 'react';
import { ToolConfig } from '../lib/types';
import ToolWorkspace from './ToolWorkspace';
import SeoContent from './SeoContent';
import Breadcrumbs from './Breadcrumbs';
import { generateWebApplicationSchema, generateHowToSchema, generateFaqSchema, generateBreadcrumbSchema } from '../lib/schema';
import { SITE_CONFIG } from '../lib/constants';

interface ToolPageLayoutProps {
  tool: ToolConfig;
}

export default function ToolPageLayout({ tool }: ToolPageLayoutProps) {
  const pageUrl = `${SITE_CONFIG.url}/${tool.slug}`;

  const webAppSchema = generateWebApplicationSchema(tool);
  const howToSchema = generateHowToSchema(tool);
  const faqSchema = generateFaqSchema(tool.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: tool.shortTitle, url: pageUrl },
  ]);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="space-y-6">
        <Breadcrumbs items={[{ name: tool.shortTitle, href: `/${tool.slug}` }]} />

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2 pb-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            {tool.h1}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {tool.subheading}
          </p>
        </div>

        {/* Interactive Workspace */}
        <ToolWorkspace tool={tool} />

        {/* Deep Authority Editorial & FAQ Section */}
        <SeoContent tool={tool} />
      </div>
    </>
  );
}
