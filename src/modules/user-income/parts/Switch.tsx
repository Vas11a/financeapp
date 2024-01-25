import React from 'react'
import s from '../style.module.css'

type SwitchType =  {
    isMonthly: boolean
    setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Switch({isMonthly, setIsMonthly}: SwitchType): JSX.Element {
    
    return (
        <div className={s.switchCont}>
            <div className='text-lg font-bold'>Monthly</div>
            <div
                onClick={() => setIsMonthly(!isMonthly)} 
                className={s.switchBlock}>
                <div className={`${s.switchCircle} ${isMonthly ? 'left-0.5' : 'left-switch'}`}></div>
            </div>
            <div className='text-lg font-bold'>Weekly</div>
        </div>
    )
}
