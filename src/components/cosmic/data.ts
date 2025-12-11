export type EventType = 'retrograde' | 'full-moon' | 'aspect';

export interface DayEvent {
  type: EventType;
  label: string;
}

export interface DayData {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: DayEvent[];
  vibe?: string;
}

export const generateMockData = (year: number, month: number): DayData[] => {
  const days: DayData[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  // Days from previous month to fill grid
  const startPadding = firstDay.getDay(); 
  for (let i = startPadding - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: false,
      events: []
    });
  }

  // Current month days
  const today = new Date();
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const d = new Date(year, month, i);
    const isToday = d.getDate() === today.getDate() && 
                    d.getMonth() === today.getMonth() && 
                    d.getFullYear() === today.getFullYear();
    
    // Random events for visual flair
    const events: DayEvent[] = [];
    if (i % 7 === 0) events.push({ type: 'full-moon', label: 'Full Moon' });
    if (i % 5 === 0) events.push({ type: 'retrograde', label: 'Mercury Retrograde' });
    if (i % 3 === 0) events.push({ type: 'aspect', label: 'Venus Trine Mars' });

    days.push({
      date: d,
      isCurrentMonth: true,
      isToday,
      events,
      vibe: "Today brings a system error to your emotional sector. Do not force updates."
    });
  }

  // Days from next month
  const remainingSlots = 42 - days.length; // 6 rows * 7 cols
  for (let i = 1; i <= remainingSlots; i++) {
    const d = new Date(year, month + 1, i);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: false,
      events: []
    });
  }

  return days;
};
