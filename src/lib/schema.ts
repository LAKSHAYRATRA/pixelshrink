import { ToolConfig } from './types';
import { SITE_CONFIG } from './constants';

export function generateWebApplicationSchema(tool: ToolConfig) {
  const pageUrl = tool.slug ? `${SITE_CONFIG.url}/${tool.slug}` : SITE_CONFIG.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    url: pageUrl,
    description: tool.metaDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and HTML5 Canvas support',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: tool.features.join(', '),
  };
}

export function generateHowToSchema(tool: ToolConfig) {
  const pageUrl = tool.slug ? `${SITE_CONFIG.url}/${tool.slug}` : SITE_CONFIG.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${tool.shortTitle}`,
    description: tool.subheading,
    step: tool.howToSteps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
      url: `${pageUrl}#step-${index + 1}`,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/icon.png`,
      },
    },
    datePublished: datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
