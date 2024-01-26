import React from 'react'
import s from './style.module.css'
import MemoCalendar from './parts/Calendar'
import MemoChart from './parts/MyChart'
import Date from './parts/Date'
import Chart from "chart.js/auto";
import MemoSwitch from './parts/Switch'
import { CategoryScale } from "chart.js";
import { useAppSelector } from 'hooks'
Chart.register(CategoryScale);

type UserIncomeType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function UserIncome({ setIsLoading, setErrorText, setIsError }: UserIncomeType): JSX.Element {
  
  const [activeDay, setActiveDay] = React.useState<number>(34)
  const {calendar, globalTotal, weekTotal, isMonthly} = useAppSelector(state => state.userPage)

  return (
    <div className='h-full'>
      <Date activeDay={calendar[activeDay]} activeIdx={activeDay} />
      <div className={s.calendarBlock}>
        <MemoCalendar calendar={calendar} isMonthly={isMonthly} setActiveDay={setActiveDay} activeDay={activeDay} />
        <MemoChart calendar={calendar} globalTotal={globalTotal} weekTotal={weekTotal} isMonthly={isMonthly} />
      </div>
      <div className={s.totalBlock}>
        <MemoSwitch isMonthly={isMonthly} />
        <div className='text-2xl font-bold'>
          Total: 
          <span 
            className={`${isMonthly ? globalTotal < 0 ? 'text-red-500' : 'text-green-500' : weekTotal < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {isMonthly ? globalTotal: weekTotal}
          </span></div>
      </div>

    </div>
  )
}
