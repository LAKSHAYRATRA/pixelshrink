import Link from 'next/link';
import { NAV_GUIDES } from '../lib/constants';
import { ChevronDown, Sliders, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5 group">
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
              In-Browser Processing
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium text-slate-700">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              Compressor
            </Link>

            {/* Target KB Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>Target Size</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                <Link href="/compress-image-to-20kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  20 KB (Signatures &amp; Stamps)
                </Link>
                <Link href="/compress-image-to-50kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  50 KB (Passport &amp; SSC)
                </Link>
                <Link href="/compress-image-to-100kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  100 KB (UPSC &amp; Portals)
                </Link>
                <Link href="/compress-image-to-200kb" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  200 KB (High Resolution)
                </Link>
              </div>
            </div>

            {/* Format Convert Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>Tools</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                <Link href="/resize-image" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  Resize Dimensions
                </Link>
                <Link href="/compress-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  Compress JPG
                </Link>
                <Link href="/compress-png" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  Compress PNG
                </Link>
                <Link href="/compress-webp" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  Compress WebP
                </Link>
                <div className="border-t border-slate-100 my-1" />
                <Link href="/png-to-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  PNG to JPG
                </Link>
                <Link href="/jpg-to-png" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  JPG to PNG
                </Link>
                <Link href="/webp-to-jpg" className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                  WebP to JPG
                </Link>
              </div>
            </div>

            {/* Guides Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:text-slate-950 hover:bg-slate-100 transition-colors">
                <span>Documentation</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full right-0 hidden group-hover:block w-64 py-1.5 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                {NAV_GUIDES.map((g) => (
                  <Link key={g.href} href={g.href} className="block px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950">
                    {g.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Direct portal link */}
          <div className="flex items-center space-x-2">
            <Link
              href="/guides/image-size-requirements-government-exams"
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              Portal Requirements Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
