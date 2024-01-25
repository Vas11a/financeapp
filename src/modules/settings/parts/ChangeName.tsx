import React from 'react'
import s from '../style.module.css'

type ChangeNameType = {
    settingsForm: number
}

export default function ChangeName({settingsForm}: ChangeNameType ):JSX.Element {
  return (
    <div className={` ${s.settingsForm}  ${settingsForm === 1 ? 'h-32 pb-10': 'h-0 pb-0' }`}>
        <div className='text-2xl pb-3 font-bold'>Change name</div>
        <div className='flex gap-5 items-center'>
          <input placeholder='New name' className={s.formInput} type="text" />
          <button className={s.borderButton} >Save</button>
        </div>
      </div>
  )
}
