import Link from 'next/link';
import { NAV_GUIDES, SITE_CONFIG } from '../lib/constants';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-10 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-mono font-bold text-xs">
                P
              </div>
              <span className="font-bold text-base text-white">
                PixelShrink
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              PixelShrink is a client-side image utility. All compression, format conversion, and pixel resizing operations are performed locally in your browser using HTML5 Canvas and WebAssembly. No image data is ever uploaded to any server.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded">
              <Shield className="w-3 h-3 text-slate-300" />
              <span>Zero upload transmission - Offline capable</span>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Compressors
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-slate-200 transition-colors">
                  Universal Compressor
                </Link>
              </li>
              <li>
                <Link href="/compress-jpg" className="hover:text-slate-200 transition-colors">
                  Compress JPG
                </Link>
              </li>
              <li>
                <Link href="/compress-png" className="hover:text-slate-200 transition-colors">
                  Compress PNG
                </Link>
              </li>
              <li>
                <Link href="/compress-webp" className="hover:text-slate-200 transition-colors">
                  Compress WebP
                </Link>
              </li>
              <li>
                <Link href="/resize-image" className="hover:text-slate-200 transition-colors">
                  Resize Dimensions
                </Link>
              </li>
            </ul>
          </div>

          {/* Target KB Tools */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Exact Size Portals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/compress-image-to-20kb" className="hover:text-slate-200 transition-colors">
                  Compress to 20 KB (Signatures)
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-50kb" className="hover:text-slate-200 transition-colors">
                  Compress to 50 KB (Passport/SSC)
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-100kb" className="hover:text-slate-200 transition-colors">
                  Compress to 100 KB (UPSC/Forms)
                </Link>
              </li>
              <li>
                <Link href="/compress-image-to-200kb" className="hover:text-slate-200 transition-colors">
                  Compress to 200 KB (General)
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="hover:text-slate-200 transition-colors">
                  PNG to JPG Converter
                </Link>
              </li>
              <li>
                <Link href="/webp-to-jpg" className="hover:text-slate-200 transition-colors">
                  WebP to JPG Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Trust Pages */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Documentation
            </h3>
            <ul className="space-y-2">
              {NAV_GUIDES.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="hover:text-slate-200 transition-colors">
                    {g.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about" className="hover:text-slate-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Processed locally in user browser.</p>
          <p className="font-mono text-[11px]">
            HTML5 Canvas • WebAssembly • Zero Remote Storage
          </p>
        </div>
      </div>
    </footer>
  );
}
