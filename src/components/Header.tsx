'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Shield, Globe } from 'lucide-react';
import { getLocaleFromPath, LOCALES } from '../lib/i18n/types';
import { UI_TRANSLATIONS } from '../lib/i18n/translations';

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname || '');
  const t = UI_TRANSLATIONS[locale].header;
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <Link href={homeHref} className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-mono text-sm font-bold">
                P
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-bold text-lg text-slate-950 tracking-tight">
                  CompressKB
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  .com
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
              <Shield className="w-3 h-3 text-slate-500" />
              <span>{t.inBrowserBadge}</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium text-slate-700">
            <Link
              href={homeHref}
              className="px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              {t.compressor}
            </Link>

            {/* Target KB Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>{t.targetSize}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                <Link href="/compress-image-to-20kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.targetMenu.kb20}
                </Link>
                <Link href="/compress-image-to-50kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.targetMenu.kb50}
                </Link>
                <Link href="/compress-image-to-100kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.targetMenu.kb100}
                </Link>
                <Link href="/compress-image-to-200kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.targetMenu.kb200}
                </Link>
              </div>
            </div>

            {/* Tools Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>{t.tools}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                <Link href="/resize-image" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.resize}
                </Link>
                <Link href="/compress-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.compressJpg}
                </Link>
                <Link href="/compress-png" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.compressPng}
                </Link>
                <Link href="/compress-webp" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.compressWebp}
                </Link>
                <div className="border-t border-slate-100 my-1" />
                <Link href="/png-to-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.pngToJpg}
                </Link>
                <Link href="/jpg-to-png" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.jpgToPng}
                </Link>
                <Link href="/webp-to-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.toolsMenu.webpToJpg}
                </Link>
              </div>
            </div>

            {/* Guides / Documentation Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>{t.documentation}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full right-0 hidden group-hover:block w-64 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                <Link href="/guides/how-image-compression-works" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.guidesMenu.howCompressionWorks}
                </Link>
                <Link href="/guides/jpg-vs-png-vs-webp" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.guidesMenu.formatComparison}
                </Link>
                <Link href="/guides/image-size-requirements-government-exams" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  {t.guidesMenu.governmentRequirements}
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Actions: Portal Button + Language Switcher */}
          <div className="flex items-center space-x-2">
            <Link
              href="/guides/image-size-requirements-government-exams"
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-colors hidden sm:inline-block"
            >
              {t.portalRequirements}
            </Link>

            {/* Language Selector Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors text-xs font-semibold text-slate-700 border border-slate-200"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{LOCALES[locale].flag} <span className="font-mono">{LOCALES[locale].code.toUpperCase()}</span></span>
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full right-0 hidden group-hover:block w-44 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                {Object.values(LOCALES).map((loc) => (
                  <Link
                    key={loc.code}
                    href={loc.prefix || '/'}
                    hrefLang={loc.hrefLang}
                    className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                      locale === loc.code
                        ? 'bg-slate-100 font-bold text-slate-950'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{loc.flag}</span>
                      <span>{loc.nativeName}</span>
                    </span>
                    {locale === loc.code && <span className="text-[10px] text-emerald-600 font-mono">✓</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
