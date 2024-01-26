import React from 'react';
import s from '../style.module.css';
import { CalendarItem } from 'modules/user-income/calendartypes';

interface CalendarType {
  calendar: CalendarItem[];
  setActiveDay: React.Dispatch<React.SetStateAction<number>>;
  activeDay: number;
  isMonthly: boolean;
}

function Calendar({ calendar, setActiveDay, activeDay, isMonthly }: CalendarType): JSX.Element {

  
  return (
    <div className="grid grid-cols-7 grid-rows-6 w-full m-auto max-w-claendar min-w-calendar rounded-xl">
      <div className={`rounded-tl-xl ${s.caledarDayName} `}>M</div>
      <div className={s.caledarDayName}>T</div>
      <div className={s.caledarDayName}>W</div>
      <div className={s.caledarDayName}>T</div>
      <div className={s.caledarDayName}>F</div>
      <div className={s.caledarDayName}>S</div>
      <div className={`rounded-tr-xl ${s.caledarDayName} `}>S</div>

      {calendar.map((elem, idx) => (
        <div
          key={idx}
          className={`${idx === 28 ? 'rounded-bl-xl' : idx === 34 ? 'rounded-br-xl' : ''} 
                     ${s.calendarDate} 
                     ${idx === activeDay ? ' bg-oBg font-bold' : ''}
                     ${!isMonthly && idx > 27 ? 'bg-calLight' : ''}
                    `}
          onClick={() => setActiveDay(idx)}
        >
          {elem.date}
        </div>
      ))}
    </div>
  );
}


const MemoCalendar = React.memo(Calendar, (prevProps, nextProps) => {
  return prevProps.activeDay === nextProps.activeDay && prevProps.isMonthly === nextProps.isMonthly;
});

export default MemoCalendar;
