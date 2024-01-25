import React from 'react'
import s from '../style.module.css'

type DeleteAccType = {
    settingsForm: number
}

export default function DeleteAcc({settingsForm}: DeleteAccType): JSX.Element {
    return (
        <div className={`${s.settingsForm}  ${settingsForm === 2 ? 'h-32 pb-10' : 'h-0 pb-0'}`}>
            <div className='text-2xl pb-3 font-bold'>Delete account</div>
            <div className='flex gap-5 items-center'>
                <input placeholder='Enter password' className={s.formInput} type="text" />
                <button className={s.borderButtonAlert} >Confirm</button>
            </div>
        </div>
    )
}
