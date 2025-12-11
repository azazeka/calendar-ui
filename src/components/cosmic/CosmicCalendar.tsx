import React, { useState } from 'react';
import { CalendarGrid } from './CalendarGrid';
import { VibeDrawer } from './VibeDrawer';
import { DayDetailModal } from './DayDetailModal';
import { DayData } from './data';
import { ChevronLeft, ChevronRight, Moon } from 'lucide-react';
import { Button } from '../ui/button';

export const CosmicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: DayData) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-8 pb-32">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
         <div className="absolute top-[20%] right-[20%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_white]" />
         <div className="absolute top-[40%] left-[10%] w-[3px] h-[3px] bg-purple-300 rounded-full shadow-[0_0_15px_purple]" />
      </div>

      <div className="z-10 w-full max-w-md px-4 mb-8 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="p-2 bg-white/5 rounded-full border border-white/10">
               <Moon size={20} className="text-purple-300 fill-purple-300/20" />
            </div>
            <div>
               <h1 className="text-2xl font-light tracking-widest text-white uppercase">{monthName}</h1>
               <span className="text-xs text-zinc-500 font-mono tracking-[0.5em]">{year}</span>
            </div>
         </div>
         
         <div className="flex gap-1">
            <Button variant="ghost" size="icon" onClick={handlePrevMonth} className="hover:bg-white/10 text-zinc-400 hover:text-white">
               <ChevronLeft size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNextMonth} className="hover:bg-white/10 text-zinc-400 hover:text-white">
               <ChevronRight size={20} />
            </Button>
         </div>
      </div>

      <div className="z-10 w-full px-4">
        <CalendarGrid currentDate={currentDate} onDayClick={handleDayClick} />
      </div>

      <VibeDrawer />

      <DayDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        day={selectedDay} 
      />
    </div>
  );
};
