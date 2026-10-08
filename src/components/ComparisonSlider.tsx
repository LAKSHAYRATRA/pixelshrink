'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ProcessedImageResult } from '../lib/types';
import { formatBytes } from '../lib/imageEngine';
import { X, Sliders } from 'lucide-react';

interface ComparisonSliderProps {
  item: ProcessedImageResult;
  onClose: () => void;
}

export default function ComparisonSlider({ item, onClose }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-800 text-lg">
              Visual Quality Comparison: {item.originalFile.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            title="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Stats Bar */}
        <div className="grid grid-cols-2 divide-x divide-slate-200 bg-white border-b border-slate-100 text-sm">
          <div className="py-2.5 px-6 flex justify-between items-center bg-slate-50/50">
            <span className="font-medium text-slate-500">Original (Left)</span>
            <span className="font-bold text-slate-800">{formatBytes(item.originalSize)} ({item.originalWidth}x{item.originalHeight})</span>
          </div>
          <div className="py-2.5 px-6 flex justify-between items-center bg-emerald-50/30">
            <span className="font-medium text-emerald-700">Optimized (Right)</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-700">{formatBytes(item.compressedSize)} ({item.compressedWidth}x{item.compressedHeight})</span>
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
                Saved {item.percentSaved}%
              </span>
            </div>
          </div>
        </div>

        {/* Split Screen Container */}
        <div className="relative flex-1 min-h-[350px] max-h-[600px] overflow-hidden bg-slate-950 flex items-center justify-center select-none">
          <div
            ref={containerRef}
            className="relative w-full h-full max-h-[550px] cursor-ew-resize flex items-center justify-center overflow-hidden"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Compressed / Optimized Image (Background) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.compressedUrl}
              alt="Optimized Preview"
              className="absolute max-h-full max-w-full object-contain pointer-events-none"
            />

            {/* Original Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.originalUrl}
                alt="Original Preview"
                className="max-h-full max-w-full object-contain pointer-events-none"
              />
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg border-2 border-emerald-500 flex items-center justify-center cursor-ew-resize">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-slate-400 rounded-full" />
                  <div className="w-0.5 h-3 bg-slate-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels on Preview */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 text-white text-xs font-semibold backdrop-blur-sm pointer-events-none">
              Original
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-emerald-600/90 text-white text-xs font-semibold backdrop-blur-sm pointer-events-none">
              Compressed
            </div>
          </div>
        </div>

        {/* Instruction Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center">
          Drag the center handle left or right to inspect pixel fidelity and compression clarity.
        </div>
      </div>
    </div>
  );
}
