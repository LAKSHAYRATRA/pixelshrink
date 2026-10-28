export type SupportedLocale = 'en' | 'es' | 'de' | 'fr' | 'pt' | 'it';

export interface LocaleInfo {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  hrefLang: string;
  prefix: string;
}

export const LOCALES: Record<SupportedLocale, LocaleInfo> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', hrefLang: 'en', prefix: '' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', hrefLang: 'es', prefix: '/es' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', hrefLang: 'de', prefix: '/de' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', hrefLang: 'fr', prefix: '/fr' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', hrefLang: 'pt', prefix: '/pt' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', hrefLang: 'it', prefix: '/it' },
};

export function getLocaleFromPath(pathname: string): SupportedLocale {
  if (!pathname) return 'en';
  const segment = pathname.split('/')[1];
  if (segment === 'es' || segment === 'de' || segment === 'fr' || segment === 'pt' || segment === 'it') {
    return segment;
  }
  return 'en';
}

export interface LocalizedUI {
  header: {
    inBrowserBadge: string;
    compressor: string;
    targetSize: string;
    tools: string;
    documentation: string;
    portalRequirements: string;
    targetMenu: {
      kb20: string;
      kb50: string;
      kb100: string;
      kb200: string;
    };
    toolsMenu: {
      resize: string;
      compressJpg: string;
      compressPng: string;
      compressWebp: string;
      pngToJpg: string;
      jpgToPng: string;
      webpToJpg: string;
    };
    guidesMenu: {
      howCompressionWorks: string;
      formatComparison: string;
      governmentRequirements: string;
    };
  };
  toolWorkspace: {
    targetFileSize: string;
    targetSubtitle: string;
    capPrefix: string;
    targetKbLabel: string;
    formatLabel: string;
    presetsLabel: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    dropzonePrivacy: string;
    selectedCountSingle: string;
    selectedCountPlural: string;
    readyToReducePrefix: string;
    addMore: string;
    clearAll: string;
    reduceButton: string;
    reducingButton: string;
    readyBannerSingle: string;
    readyBannerPlural: string;
    savedPrefix: string;
    downloadZip: string;
    uploadNew: string;
    downloadButton: string;
    targetSuffix: string;
    compareQuality: string;
  };
  footer: {
    description: string;
    shieldBadge: string;
    compressorsHeading: string;
    targetsHeading: string;
    documentationHeading: string;
    universalCompressor: string;
    resizeDimensions: string;
    compressJpg: string;
    compressPng: string;
    compressWebp: string;
    kb20Link: string;
    kb50Link: string;
    kb100Link: string;
    kb200Link: string;
    pngToJpgLink: string;
    webpToJpgLink: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    languagesLabel: string;
    rights: string;
    privacyNote: string;
  };
}

export interface LocalizedSeoTool {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  keywords: string[];
  features: string[];
  howToSteps: { name: string; text: string }[];
  faqs: { question: string; answer: string }[];
}
