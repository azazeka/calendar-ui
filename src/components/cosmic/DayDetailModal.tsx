import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { AlertTriangle, Fingerprint, Disc, MoveDiagonal } from 'lucide-react';
import { DayData } from './data';

interface DayDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: DayData | null;
}

export const DayDetailModal = ({ isOpen, onClose, day }: DayDetailModalProps) => {
  if (!day) return null;

  const dateStr = day.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const isScorpio = true; // Hardcoded for vibe match
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[90%] bg-[#09090b]/80 backdrop-blur-xl border border-white/10 text-white p-0 gap-0 overflow-hidden shadow-[0_0_50px_rgba(109,40,217,0.2)]">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-white/5 relative">
          <div className="absolute top-0 right-0 p-4 opacity-20">
             <Fingerprint size={60} />
          </div>
          <DialogTitle className="text-2xl font-light tracking-wider mb-2">{dateStr}</DialogTitle>
          <Badge variant="outline" className="text-xs tracking-widest border-purple-500/50 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 uppercase rounded-sm px-2 py-1">
            Scorpio Season
          </Badge>
        </div>

        {/* Vibe Check */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">AI Vibe Check</h3>
             <div className="p-4 rounded bg-black/40 border-l-2 border-red-500 font-mono text-sm leading-relaxed text-zinc-300 shadow-inner">
               "Today brings a system error to your emotional sector. Do not force updates."
             </div>
          </div>

          <Separator className="bg-white/10" />

          {/* Planetary Transits */}
          <div className="space-y-3">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Planetary Transits</h3>
             
             <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
               <div className="flex items-center gap-3">
                 <div className="p-2 rounded-full bg-red-500/10 text-red-400 group-hover:text-red-300">
                    <AlertTriangle size={16} />
                 </div>
                 <span className="text-sm font-medium">Mars Square Pluto</span>
               </div>
               <Badge className="bg-red-500/20 text-red-300 hover:bg-red-500/30 border-0 text-[10px] uppercase">High Risk</Badge>
             </div>

             <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
               <div className="flex items-center gap-3">
                 <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:text-purple-300">
                    <MoveDiagonal size={16} />
                 </div>
                 <span className="text-sm font-medium">Venus Trine Neptune</span>
               </div>
             </div>

             <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
               <div className="flex items-center gap-3">
                 <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:text-blue-300">
                    <Disc size={16} />
                 </div>
                 <span className="text-sm font-medium">Moon Enter Gemini</span>
               </div>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
