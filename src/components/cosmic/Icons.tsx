import React from 'react';
import { RotateCcw, Sparkles, Circle } from 'lucide-react';

export const RetrogradeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <RotateCcw className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
  </div>
);

export const FullMoonIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-full h-full rounded-full bg-yellow-400/20 border border-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] flex items-center justify-center">
       <div className="w-[60%] h-[60%] bg-yellow-400 rounded-full blur-[1px]" />
    </div>
  </div>
);

export const AspectIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Sparkles className="text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] fill-purple-400/20" />
  </div>
);
