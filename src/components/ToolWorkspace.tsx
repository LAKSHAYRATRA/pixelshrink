'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ToolConfig, ProcessedImageResult, ImageProcessingOptions, OutputFormat } from '../lib/types';
import { processImage, formatBytes, downloadImage, downloadZip } from '../lib/imageEngine';
import ComparisonSlider from './ComparisonSlider';
import {
  UploadCloud,
  Download,
  Trash2,
  Eye,
  Sliders,
  CheckCircle2,
  Archive,
  RefreshCw,
  Shield,
  FileCheck,
  ImageIcon,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ToolWorkspaceProps {
  tool: ToolConfig;
}

export default function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [results, setResults] = useState<ProcessedImageResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeItemForComparison, setActiveItemForComparison] = useState<ProcessedImageResult | null>(null);

  // Single dedicated target KB state
  const defaultTarget = tool.targetKB || 50;
  const [targetKB, setTargetKB] = useState<number>(defaultTarget);
  const [targetFormat, setTargetFormat] = useState<OutputFormat>('image/jpeg');

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const buildCurrentOptions = useCallback((): ImageProcessingOptions => {
    return {
      targetKB: targetKB > 0 ? targetKB : 50,
      targetFormat: targetFormat,
      backgroundColor: '#ffffff',
    };
  }, [targetKB, targetFormat]);

  // Execute processing only when user explicitly clicks "Reduce Image"
  const handleExecuteReduction = async () => {
    if (selectedFiles.length === 0 || isProcessing) return;
    setIsProcessing(true);

    const options = buildCurrentOptions();

    try {
      const newResults: ProcessedImageResult[] = [];
      for (const file of selectedFiles) {
        const res = await processImage(file, options);
        newResults.push(res);
      }
      setResults(newResults);
    } catch (err) {
      console.error('Image reduction failure:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith('image/')
      );
      if (droppedFiles.length > 0) {
        setSelectedFiles(droppedFiles);
        setResults([]); // Reset previous results until user clicks Reduce
      }
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).filter((file) =>
        file.type.startsWith('image/')
      );
      if (files.length > 0) {
        setSelectedFiles(files);
        setResults([]); // Reset previous results until user clicks Reduce
      }
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) {
        setResults([]);
      }
      return next;
    });
  };

  const clearAll = () => {
    setSelectedFiles([]);
    setResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const totalOriginalSize = results.reduce((acc, r) => acc + r.originalSize, 0);
  const totalCompressedSize = results.reduce((acc, r) => acc + r.compressedSize, 0);
  const overallSavedPercent =
    totalOriginalSize > 0
      ? Math.round(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100)
      : 0;

  return (
    <div className="w-full space-y-3">
      {/* Target KB Settings Bar */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="font-bold text-slate-950 text-base flex items-center gap-2">
              <Sliders className="w-4 h-4 text-slate-800" />
              <span>Target File Size</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Set target KB limit. Photos will be reduced strictly under or equal to this size.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0">
            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cap: &le; {targetKB} KB</span>
          </div>
        </div>

        {/* Inputs & Presets in compact row */}
        <div className="pt-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            {/* Direct KB input */}
            <div className="w-36">
              <label htmlFor="target-kb-input" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Target KB
              </label>
              <div className="relative flex items-center">
                <input
                  id="target-kb-input"
                  type="number"
                  min="5"
                  max="10000"
                  step="5"
                  value={targetKB}
                  onChange={(e) => setTargetKB(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-bold text-slate-900 focus:outline-slate-800 focus:bg-white pr-10"
                />
                <span className="absolute right-2.5 text-[11px] font-mono font-bold text-slate-400 pointer-events-none">
                  KB
                </span>
              </div>
            </div>

            {/* Format Dropdown */}
            <div className="w-40">
              <label htmlFor="target-format-select" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Format
              </label>
              <select
                id="target-format-select"
                value={targetFormat}
                onChange={(e) => setTargetFormat(e.target.value as OutputFormat)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-900 focus:outline-slate-800 cursor-pointer"
              >
                <option value="image/jpeg">JPG / JPEG</option>
                <option value="image/webp">WebP</option>
                <option value="image/png">PNG</option>
              </select>
            </div>
          </div>

          {/* Quick presets pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[11px] font-medium text-slate-400 mr-1">Presets:</span>
            {[
              { kb: 20, label: '20 KB' },
              { kb: 50, label: '50 KB' },
              { kb: 100, label: '100 KB' },
              { kb: 200, label: '200 KB' },
              { kb: 500, label: '500 KB' },
            ].map((p) => (
              <button
                key={p.kb}
                type="button"
                onClick={() => setTargetKB(p.kb)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                  targetKB === p.kb
                    ? 'bg-slate-950 text-white border-slate-950'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Action Hub: Upload & In-Screen Processing */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
        {selectedFiles.length === 0 ? (
          /* Step 1: Upload Dropzone when no file selected */
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-slate-800 bg-slate-100'
                : 'border-slate-300 bg-slate-50/50 hover:border-slate-400 hover:bg-slate-100/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={onFileChange}
              className="hidden"
            />

            <div className="max-w-md mx-auto space-y-2 pointer-events-none">
              <div className="w-10 h-10 mx-auto rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700">
                <UploadCloud className="w-5 h-5" />
              </div>

              <div>
                <p className="text-base font-bold text-slate-900">
                  Select or drop image here
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Supports JPG, PNG, and WebP. Batch multi-file upload enabled.
                </p>
              </div>

              <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <Shield className="w-3 h-3 text-slate-400" />
                <span>100% private in-browser compression. Zero server upload.</span>
              </div>
            </div>
          </div>
        ) : (
          /* Step 2: Files are selected -> Show file queue with Reduce Button right here */
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-slate-700" />
                <span className="font-bold text-slate-900 text-sm">
                  {selectedFiles.length} {selectedFiles.length === 1 ? 'image selected' : 'images selected'}
                </span>
                <span className="text-xs text-slate-500">
                  (ready to reduce to &le; {targetKB} KB)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                >
                  Add more
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={onFileChange}
              className="hidden"
            />

            {/* List of uploaded files awaiting conversion */}
            {results.length === 0 && (
              <div className="space-y-2">
                {selectedFiles.map((file, idx) => (
                  <div
                    key={`${file.name}-${idx}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div className="flex items-center gap-2.5 truncate max-w-sm sm:max-w-md">
                      <div className="w-7 h-7 rounded bg-slate-200 flex items-center justify-center text-slate-600 font-mono text-[10px] font-bold uppercase shrink-0">
                        {file.name.split('.').pop() || 'IMG'}
                      </div>
                      <span className="font-medium text-slate-900 truncate">
                        {file.name}
                      </span>
                      <span className="text-slate-500 font-mono text-[11px] shrink-0">
                        ({formatBytes(file.size)})
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeSelectedFile(idx)}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {/* THE REDUCE / CONVERT BUTTON - High Visibility, directly in screen */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleExecuteReduction}
                    disabled={isProcessing}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>Reducing image to &le; {targetKB} KB...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>Reduce Image to {targetKB} KB</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Processed Results & Instant Download (Shows right here in screen) */}
        {results.length > 0 && (
          <div className="space-y-3 pt-2">
            {/* Success Summary Banner */}
            <div className="bg-slate-950 text-white rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-sm">
                    Ready! {results.length} {results.length === 1 ? 'image' : 'images'} reduced to &le; {targetKB} KB
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-mono">
                  {formatBytes(totalOriginalSize)} → {formatBytes(totalCompressedSize)} (saved {overallSavedPercent}%)
                </p>
              </div>

              <div className="flex items-center gap-2">
                {results.length > 1 && (
                  <button
                    onClick={() => downloadZip(results, `${tool.shortTitle.toLowerCase().replace(/\s+/g, '-')}-bundle.zip`)}
                    className="flex items-center gap-1.5 bg-white text-slate-950 hover:bg-slate-100 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer"
                  >
                    <Archive className="w-3.5 h-3.5" />
                    <span>Download All (ZIP)</span>
                  </button>
                )}

                <button
                  onClick={clearAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Upload New
                </button>
              </div>
            </div>

            {/* Individual Image Download Cards right in view */}
            <div className="space-y-2">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.compressedUrl}
                      alt={item.originalFile.name}
                      className="w-12 h-12 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900 truncate max-w-xs sm:max-w-md">
                        {item.originalFile.name}
                      </p>
                      <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] mt-0.5">
                        <span>{item.compressedWidth}x{item.compressedHeight}px</span>
                        <span>•</span>
                        <span className="uppercase">{item.outputFormat.replace('image/', '')}</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-bold">&le; {targetKB} KB target</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 font-mono">
                        <span className="line-through text-slate-400">
                          {formatBytes(item.originalSize)}
                        </span>
                        <span className="font-bold text-slate-900">
                          {formatBytes(item.compressedSize)}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold">
                        -{item.percentSaved}% saved
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setActiveItemForComparison(item)}
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
                        title="Compare visual quality"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* Direct Big Download Button */}
                      <button
                        type="button"
                        onClick={() => downloadImage(item, `reduced-${targetKB}kb`)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors cursor-pointer shadow-sm text-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeItemForComparison && (
        <ComparisonSlider
          item={activeItemForComparison}
          onClose={() => setActiveItemForComparison(null)}
        />
      )}
    </div>
  );
}
