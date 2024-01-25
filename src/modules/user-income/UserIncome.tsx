import React from 'react'
import s from './style.module.css'
import Calendar from './parts/Calendar'
import MyChart from './parts/MyChart'
import Date from './parts/Date'
import Chart from "chart.js/auto";
import Switch from './parts/Switch'
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
  const [isMonthly, setIsMonthly] = React.useState<boolean>(true)
  const {calendar, globalTotal, weekTotal} = useAppSelector(state => state.userPage)

  return (
    <div className='h-full'>
      <Date activeDay={calendar[activeDay]} activeIdx={activeDay} />
      <div className='flex justify-between gap-20'>
        <Calendar calendar={calendar} setActiveDay={setActiveDay} activeDay={activeDay} />
        <MyChart calendar={calendar} globalTotal={globalTotal} weekTotal={weekTotal} isMonthly={isMonthly} />
      </div>
      <div className={s.totalBlock}>
        <Switch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
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
