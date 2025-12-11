import React, { useMemo } from 'react';
import { DayCell } from './DayCell';
import { generateMockData, DayData } from './data';

interface CalendarGridProps {
  currentDate: Date;
  onDayClick: (day: DayData) => void;
}

export const CalendarGrid = ({ currentDate, onDayClick }: CalendarGridProps) => {
  const days = useMemo(() => {
    return generateMockData(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="w-full max-w-md mx-auto aspect-square flex flex-col border border-white/5 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 border-b border-white/5">
        {weekDays.map(day => (
          <div key={day} className="py-3 text-center text-[10px] font-bold tracking-widest text-zinc-500 bg-black/40">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 flex-1">
        {days.map((day, idx) => (
          <DayCell 
            key={`${day.date.toISOString()}-${idx}`} 
            day={day} 
            onClick={onDayClick} 
          />
        ))}
      </div>
    </div>
  );
};
