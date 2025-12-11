import React from 'react';
import { Card } from "../ui/card";
import { Sparkles } from 'lucide-react';

export const VibeDrawer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 z-20">
      <Card className="max-w-md mx-auto bg-[#09090b]/90 backdrop-blur-md border border-purple-500/30 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        <div className="p-4 flex gap-4 items-center">
          <div className="p-2 bg-purple-500/10 rounded-full border border-purple-500/20">
            <Sparkles size={18} className="text-purple-400 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-purple-300 mb-1">TODAY'S VIBE</h3>
            <p className="text-sm text-zinc-300 leading-tight">
              The cosmos aligns for deep introspection. Watch for digital anomalies.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
