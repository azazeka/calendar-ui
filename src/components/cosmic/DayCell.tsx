import React from 'react';
import { cn } from "../../components/ui/utils";
import { DayData, DayEvent } from './data';
import { RetrogradeIcon, FullMoonIcon, AspectIcon } from './Icons';

interface DayCellProps {
  day: DayData;
  onClick: (day: DayData) => void;
}

export const DayCell = ({ day, onClick }: DayCellProps) => {
  return (
    <button
      onClick={() => onClick(day)}
      className={cn(
        "relative aspect-square flex flex-col p-2 border transition-all duration-300 group hover:z-10",
        day.isCurrentMonth ? "bg-black/20 text-white border-white/5 hover:bg-white/5 hover:border-purple-500/30" : "bg-black/40 text-zinc-700 border-white/5",
        day.isToday && "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] bg-purple-500/5 z-10"
      )}
    >
      <span className={cn(
        "text-sm font-light",
        day.isToday ? "text-purple-300 font-normal" : "text-zinc-400"
      )}>
        {day.date.getDate()}
      </span>

      {day.isCurrentMonth && (
        <div className="flex-1 flex flex-col items-end justify-end gap-1 pb-1 pr-1">
          {day.events.map((event, idx) => (
            <div key={idx} title={event.label}>
              {event.type === 'retrograde' && (
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,1)] animate-pulse" />
              )}
              {event.type === 'full-moon' && (
                 <div className="w-2 h-2 rounded-full border border-yellow-400 bg-yellow-400/20 shadow-[0_0_4px_rgba(250,204,21,0.8)]" />
              )}
              {event.type === 'aspect' && (
                 <div className="w-1.5 h-1.5 rotate-45 bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
              )}
            </div>
          ))}
        </div>
      )}
    </button>
  );
};
