import type { Metadata } from 'next';
import { ALL_TOOLS, SITE_CONFIG } from '../../lib/constants';
import { LOCALIZED_HOMEPAGES } from '../../lib/i18n/seoData';
import ToolWorkspace from '../../components/ToolWorkspace';
import Link from 'next/link';
import { ShieldCheck, Zap, Lock, Sparkles, HelpCircle } from 'lucide-react';

const seo = LOCALIZED_HOMEPAGES.es;
const tool = ALL_TOOLS[0];

export const metadata: Metadata = {
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  alternates: {
    canonical: SITE_CONFIG.url + '/es',
    languages: {
      'en': SITE_CONFIG.url,
      'es': SITE_CONFIG.url + '/es',
      'de': SITE_CONFIG.url + '/de',
      'fr': SITE_CONFIG.url + '/fr',
      'pt': SITE_CONFIG.url + '/pt',
      'it': SITE_CONFIG.url + '/it',
      'x-default': SITE_CONFIG.url,
    },
  },
};

export default function SpanishPage() {
  return (
    <div className="space-y-6">
      <section className="text-center space-y-2.5 max-w-3xl mx-auto pt-2 pb-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>🇪🇸 Edición en Español • 100% Privacidad en el Navegador</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
          {seo.h1}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {seo.subheading}
        </p>
      </section>

      <ToolWorkspace tool={tool} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-xs text-slate-900">Sin Subidas a Servidores</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Tus fotos nunca salen de tu navegador.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-xs text-slate-900">Precisión Exacta en KB</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Búsqueda binaria para el tamaño exacto.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-xs text-slate-900">100% Gratis Siempre</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Sin límites diarios ni registros.</p>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950">Cómo Comprimir Imágenes en KB</h2>
          <p className="text-xs text-slate-500 mt-1">Proceso sencillo en 3 pasos para optimizar tus fotos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seo.howToSteps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                {idx + 1}
              </div>
              <h3 className="font-bold text-sm text-slate-900">{step.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-slate-700" />
          <h2 className="text-xl font-bold text-slate-950">Preguntas Frecuentes</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {seo.faqs.map((faq, idx) => (
            <div key={idx} className="py-3.5 space-y-1">
              <h3 className="font-bold text-sm text-slate-900">{faq.question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
