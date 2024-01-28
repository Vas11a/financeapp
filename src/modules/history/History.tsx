import React from 'react'
import { HistoryElemType } from 'types'
import s from './style.module.css'
import trashbox from '@imgs/trashbox.png'
import Button from 'components/Button'

type HistoryType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function History({ setIsLoading, setErrorText, setIsError }: HistoryType): JSX.Element {

  const [historyList, setHistoryList] = React.useState<HistoryElemType[]>([
    {
      type: 'Week',
      date: '20.01.2021 - 27.01.2021',
      total: 300,
    },
    {
      type: 'Month',
      date: '30.01.2021 - 30.02.2021',
      total: 2000,
    },
    {
      type: 'Week',
      date: '16.01.2021 - 23.01.2021',
      total: -250,
    },
  ])

  return (
    <div className={s.main}>
      {
        historyList.map((elem, idx) => (
          <div className={s.historyBlock}>
            <div className='text-2xl font-bold'>{elem.type}</div>
            <div className={s.date}>({elem.date})</div>
            <div 
              className={`text-2xl font-bold ${elem.total < 0 ? 'text-red-500' : 'text-green-500'} `}>
              {elem.total  < 0 ? elem.total : '+' + elem.total}
            </div>
            <img
              className='w-6 h-auto cursor-pointer' 
              src={trashbox} 
              alt="Remove" />
          </div>
        ))
      }
      <Button text='Clear all' extraClasses='mt-4'/>
    </div>
  )
}
