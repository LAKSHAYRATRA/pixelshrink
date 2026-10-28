'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '../lib/constants';
import { Shield } from 'lucide-react';
import { getLocaleFromPath, LOCALES } from '../lib/i18n/types';
import { UI_TRANSLATIONS } from '../lib/i18n/translations';

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname || '');
  const t = UI_TRANSLATIONS[locale].footer;
  const headerT = UI_TRANSLATIONS[locale].header;
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-10 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <Link href={homeHref} className="flex items-center space-x-2 text-white">
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-mono font-bold text-xs">
                P
              </div>
              <span className="font-bold text-base text-white">
                CompressKB
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.description}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded">
              <Shield className="w-3 h-3 text-slate-300" />
              <span>{t.shieldBadge}</span>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {t.compressorsHeading}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={homeHref} className="hover:text-slate-200 transition-colors">
                  {t.universalCompressor}
                </Link>
              </li>
              <li>
                <Link href="/compress-jpg" className="hover:text-slate-200 transition-colors">
                  {t.compressJpg}
                </Link>
              </li>
              <li>
                <Link href="/compress-png" className="hover:text-slate-200 transition-colors">
                  {t.compressPng}
                </Link>
              </li>
              <li>
                <Link href="/compress-webp" className="hover:text-slate-200 transition-colors">
                  {t.compressWebp}
                </Link>
              </li>
              <li>
                <Link href="/resize-image" className="hover:text-slate-200 transition-colors">
                  {t.resizeDimensions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Target KB Tools */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {t.targetsHeading}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/compress-image-to-20kb" className="hover:text-slate-200 transition-colors">
                  {t.kb20Link}
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-50kb" className="hover:text-slate-200 transition-colors">
                  {t.kb50Link}
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-100kb" className="hover:text-slate-200 transition-colors">
                  {t.kb100Link}
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-200kb" className="hover:text-slate-200 transition-colors">
                  {t.kb200Link}
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="hover:text-slate-200 transition-colors">
                  {t.pngToJpgLink}
                </Link>
              </li>
              <li>
                <Link href="/webp-to-jpg" className="hover:text-slate-200 transition-colors">
                  {t.webpToJpgLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Trust Pages */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {t.documentationHeading}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/how-image-compression-works" className="hover:text-slate-200 transition-colors">
                  {headerT.guidesMenu.howCompressionWorks}
                </Link>
              </li>
              <li>
                <Link href="/guides/jpg-vs-png-vs-webp" className="hover:text-slate-200 transition-colors">
                  {headerT.guidesMenu.formatComparison}
                </Link>
              </li>
              <li>
                <Link href="/guides/image-size-requirements-government-exams" className="hover:text-slate-200 transition-colors">
                  {headerT.guidesMenu.governmentRequirements}
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about" className="hover:text-slate-200 transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-200 transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-200 transition-colors">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Quick Switcher */}
        <div className="py-4 border-b border-slate-800 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">{t.languagesLabel}</span>
          {Object.values(LOCALES).map((loc, idx) => (
            <span key={loc.code} className="inline-flex items-center gap-2">
              <Link
                href={loc.prefix || '/'}
                hrefLang={loc.hrefLang}
                className={`transition-colors ${
                  locale === loc.code
                    ? 'text-white font-bold underline underline-offset-4'
                    : 'hover:text-white text-slate-400'
                }`}
              >
                {loc.flag} {loc.nativeName}
              </Link>
              {idx < Object.values(LOCALES).length - 1 && <span className="text-slate-600">•</span>}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. {t.rights}</p>
          <p className="font-mono text-[11px]">
            {t.privacyNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
