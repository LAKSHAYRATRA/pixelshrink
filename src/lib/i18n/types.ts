export type SupportedLocale = 'en' | 'es' | 'de' | 'fr' | 'pt' | 'it';

export interface LocaleInfo {
  code: SupportedLocale;
  name: string;
  flag: string;
  hrefLang: string;
  prefix: string;
}

export const LOCALES: Record<SupportedLocale, LocaleInfo> = {
  en: { code: 'en', name: 'English', flag: '🇺🇸', hrefLang: 'en', prefix: '' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸', hrefLang: 'es', prefix: '/es' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', hrefLang: 'de', prefix: '/de' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', hrefLang: 'fr', prefix: '/fr' },
  pt: { code: 'pt', name: 'Português', flag: '🇧🇷', hrefLang: 'pt', prefix: '/pt' },
  it: { code: 'it', name: 'Italiano', flag: '🇮🇹', hrefLang: 'it', prefix: '/it' },
};

export interface LocalizedUI {
  dropzone: {
    title: string;
    subtitle: string;
    badge: string;
    privacy: string;
  };
  controls: {
    title: string;
    targetMode: string;
    qualityMode: string;
    targetLabel: string;
    qualityLabel: string;
    formatLabel: string;
    compressAll: string;
    compressing: string;
    downloadZip: string;
    clearAll: string;
    preset20: string;
    preset50: string;
    preset100: string;
    preset200: string;
  };
  table: {
    preview: string;
    filename: string;
    originalSize: string;
    compressedSize: string;
    saved: string;
    status: string;
    action: string;
    download: string;
    done: string;
    processing: string;
  };
  nav: {
    compressor: string;
    targetSize: string;
    formats: string;
    guides: string;
    language: string;
  };
  footer: {
    rights: string;
    privacyNote: string;
    compressors: string;
    targets: string;
    resources: string;
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
