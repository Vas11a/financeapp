import React from 'react'
import s from './style.module.css'

type HistoryType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function History({setIsLoading, setErrorText, setIsError}: HistoryType):JSX.Element {
  return (
    <div className='h-full'>UserExpenses</div>
  )
}
