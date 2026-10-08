export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface ImageProcessingOptions {
  targetKB: number;
  targetFormat?: OutputFormat;
  quality?: number;
  backgroundColor?: string;
}

export interface ProcessedImageResult {
  id: string;
  originalFile: File;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalUrl: string;
  compressedBlob: Blob;
  compressedSize: number;
  compressedWidth: number;
  compressedHeight: number;
  compressedUrl: string;
  outputFormat: OutputFormat;
  percentSaved: number;
  processingTimeMs: number;
}

export interface ToolConfig {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  targetKB: number;
  keywords: string[];
  features: string[];
  howToSteps: { name: string; text: string }[];
  faqs: { question: string; answer: string }[];
  articleContent: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedToolSlugs: string[];
}
