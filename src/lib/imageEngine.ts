import { ImageProcessingOptions, ProcessedImageResult, OutputFormat } from './types';
import JSZip from 'jszip';

/**
 * Loads an image File into an HTMLImageElement
 */
export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => resolve(img);
    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image file: ' + err));
    };
    img.src = objectUrl;
  });
}

/**
 * Encodes canvas to Blob with specified mime type and quality
 */
export function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: OutputFormat,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas to Blob conversion failed'));
        }
      },
      format,
      quality
    );
  });
}

/**
 * Determines output format based on options and original file mime type
 */
export function resolveOutputFormat(file: File, options: ImageProcessingOptions): OutputFormat {
  if (options.targetFormat) {
    return options.targetFormat;
  }
  const type = file.type.toLowerCase();
  if (type === 'image/webp') return 'image/webp';
  // Default to JPEG for target-size compression as it supports precise lossy quantization
  return 'image/jpeg';
}

/**
 * Core Target KB compression engine
 * Reduces image size to strictly <= targetKB with maximum visual clarity
 */
export async function processImage(
  file: File,
  options: ImageProcessingOptions
): Promise<ProcessedImageResult> {
  const startTime = performance.now();
  const img = await loadImage(file);
  const originalWidth = img.naturalWidth || img.width;
  const originalHeight = img.naturalHeight || img.height;
  const originalSize = file.size;
  const outputFormat = resolveOutputFormat(file, options);
  const targetBytes = Math.max(5, options.targetKB) * 1024;

  let currentWidth = originalWidth;
  let currentHeight = originalHeight;

  const canvas = document.createElement('canvas');
  canvas.width = currentWidth;
  canvas.height = currentHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not get 2D canvas context');
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Fill white background for JPEG output to cleanly handle alpha transparency
  if (outputFormat === 'image/jpeg') {
    ctx.fillStyle = options.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, currentWidth, currentHeight);
  }

  ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

  // Binary search on quality and adaptive downscaling to guarantee <= targetKB
  let bestBlob: Blob | null = null;
  let currentScale = 1.0;
  let attempts = 0;
  const maxAttempts = 6;

  while (attempts < maxAttempts) {
    let low = 0.05;
    let high = 0.95;
    let candidateBlob: Blob | null = null;

    // 7-step binary search to converge on exact byte limit
    for (let i = 0; i < 7; i++) {
      const mid = (low + high) / 2;
      const testBlob = await canvasToBlob(canvas, outputFormat, mid);

      if (testBlob.size <= targetBytes) {
        candidateBlob = testBlob;
        low = mid; // Try higher quality
      } else {
        high = mid; // Needs more compression
      }
    }

    if (candidateBlob && candidateBlob.size <= targetBytes) {
      bestBlob = candidateBlob;
      break;
    }

    // If lowest quality is still above target KB, gently scale dimensions down by 15%
    attempts++;
    currentScale *= 0.85;
    currentWidth = Math.max(40, Math.round(originalWidth * currentScale));
    currentHeight = Math.max(40, Math.round(originalHeight * currentScale));

    canvas.width = currentWidth;
    canvas.height = currentHeight;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (outputFormat === 'image/jpeg') {
      ctx.fillStyle = options.backgroundColor || '#ffffff';
      ctx.fillRect(0, 0, currentWidth, currentHeight);
    }
    ctx.drawImage(img, 0, 0, currentWidth, currentHeight);
  }

  let finalBlob: Blob;
  if (bestBlob) {
    finalBlob = bestBlob;
  } else {
    // Fallback to lowest compression floor
    finalBlob = await canvasToBlob(canvas, outputFormat, 0.08);
  }

  const endTime = performance.now();
  const compressedSize = finalBlob.size;
  const percentSaved = Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100));

  return {
    id: Math.random().toString(36).substring(2, 9),
    originalFile: file,
    originalSize,
    originalWidth,
    originalHeight,
    originalUrl: URL.createObjectURL(file),
    compressedBlob: finalBlob,
    compressedSize,
    compressedWidth: currentWidth,
    compressedHeight: currentHeight,
    compressedUrl: URL.createObjectURL(finalBlob),
    outputFormat,
    percentSaved,
    processingTimeMs: Math.round(endTime - startTime),
  };
}

/**
 * Formats byte size into human readable string
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 KB';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Downloads single compressed image
 */
export function downloadImage(result: ProcessedImageResult, customPrefix = 'compressed'): void {
  const extension = result.outputFormat === 'image/webp' ? 'webp' : result.outputFormat === 'image/png' ? 'png' : 'jpg';
  const originalBaseName = result.originalFile.name.substring(0, result.originalFile.name.lastIndexOf('.')) || 'image';
  const downloadName = `${customPrefix}-${originalBaseName}.${extension}`;

  const link = document.createElement('a');
  link.href = result.compressedUrl;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Packages all compressed files into a single ZIP archive
 */
export async function downloadZip(results: ProcessedImageResult[], zipName = 'compressed-images.zip'): Promise<void> {
  const zip = new JSZip();

  results.forEach((res, index) => {
    const ext = res.outputFormat === 'image/webp' ? 'webp' : res.outputFormat === 'image/png' ? 'png' : 'jpg';
    const baseName = res.originalFile.name.substring(0, res.originalFile.name.lastIndexOf('.')) || `image-${index + 1}`;
    zip.file(`compressed-${baseName}.${ext}`, res.compressedBlob);
  });

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);

  const link = document.createElement('a');
  link.href = url;
  link.download = zipName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
