import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from 'next/link';
import { generateArticleSchema } from '../../../lib/schema';
import { SITE_CONFIG } from '../../../lib/constants';
import { Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Image Compression Works: Lossy vs Lossless Explained (2026)',
  description: 'A deep technical dive into how image compression works: Discrete Cosine Transform (DCT), quantization matrices, Huffman coding, and browser WebAssembly.',
  keywords: ['how image compression works', 'lossy vs lossless', 'image compression algorithm', 'dct jpeg compression', 'webp compression'],
};

export default function GuidePage() {
  const articleSchema = generateArticleSchema(
    'How Image Compression Works: Lossy vs Lossless Explained',
    'A comprehensive technical guide to digital image compression algorithms.',
    `${SITE_CONFIG.url}/guides/how-image-compression-works`,
    '2026-01-15'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        <Breadcrumbs
          items={[
            { name: 'Guides', href: '/guides/how-image-compression-works' },
            { name: 'How Compression Works', href: '/guides/how-image-compression-works' },
          ]}
        />

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <header className="space-y-4 border-b border-slate-200 pb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Technical Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How Image Compression Works: The Science of Shrinking Pixels
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every day, trillions of compressed images are delivered across fiber optic cables and 5G cellular antennas. Here is how modern mathematics and computer science make multi-megabyte photographs load in milliseconds.
            </p>
          </header>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              1. The Fundamental Distinction: Lossy vs. Lossless
            </h2>
            <p>
              At its most fundamental level, digital image compression is categorized into two paradigms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Lossless Compression (PNG, GIF)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  In lossless compression, every single byte of pixel data is mathematically preserved. When the file is decompressed, the reconstructed pixel grid is bit-for-bit identical to the source. Algorithms like DEFLATE (LZ77 + Huffman coding) identify repeating sequences of pixels and encode them with shorter binary tokens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <h3 className="font-bold text-emerald-950 text-lg mb-2">Lossy Compression (JPEG, WebP)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lossy compression discards data that the human optical system is least sensitive to. By shedding high-frequency color nuances and fine textural noise, files can shrink by 80% to 95% while appearing visually indistinguishable to human viewers.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              2. Inside the JPEG Algorithm: From Pixels to Frequencies
            </h2>
            <p>
              When an image is saved as a JPEG, it undergoes four distinct mathematical operations:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Color Space Transformation (RGB to YCbCr):</strong> The human eye has approximately 120 million rod cells (sensitive to luminance/brightness) and only 6 to 7 million cone cells (sensitive to color). JPEG separates luminance (Y) from chrominance (Cb, Cr), allowing aggressive downsampling of color channels without perceived degradation.
              </li>
              <li>
                <strong>Discrete Cosine Transform (DCT):</strong> The image is subdivided into 8x8 pixel blocks. The DCT converts spatial pixel data into frequency coefficients, isolating smooth gradients (low frequencies) from abrupt edge transitions (high frequencies).
              </li>
              <li>
                <strong>Quantization (The Lossy Step):</strong> High-frequency coefficients are divided by values in a quantization table and rounded to the nearest integer. Because many high frequencies round to zero, huge swaths of data are discarded. The "Quality" slider (e.g. 80%) directly scales this quantization table.
              </li>
              <li>
                <strong>Entropy Encoding (Huffman Coding):</strong> The resulting zeros and coefficients are ordered in a zig-zag matrix and compressed via run-length encoding and Huffman coding tables.
              </li>
            </ol>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              3. WebP and Next-Generation Predictive Encoding
            </h2>
            <p>
              Google developed WebP using technology derived from the VP8 video codec. Unlike JPEG's rigid 8x8 DCT blocks, WebP introduces spatial prediction algorithms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It analyzes neighboring pixel blocks to predict the contents of the current block.</li>
              <li>It encodes only the difference (residual) between the prediction and actual pixels.</li>
              <li>This achieves 25% to 34% smaller file sizes than comparable JPEG images at identical visual perception scores.</li>
            </ul>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              4. Why Browser-Based (Client-Side) Compression is the Future
            </h2>
            <p>
              Historically, websites uploaded photos to remote servers running ImageMagick or libjpeg. In 2026, modern browser engines support hardware-accelerated Canvas 2D contexts, OffscreenCanvas, and WebAssembly.
            </p>
            <p>
              PixelShrink executes all quantization, transforms, and scaling directly on your machine's GPU and CPU. This ensures maximum privacy for personal documents, zero upload latency, and limitless free processing.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900">Ready to test these compression mechanics?</p>
              <p className="text-sm text-slate-500">Try our free client-side image compressor now.</p>
            </div>
            <Link
              href="/"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              <span>Launch Compressor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
