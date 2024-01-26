import React from 'react'
import s from '../style.module.css'

type DeleteAccType = {
    settingsForm: number
    deleteAccount: (password: string) => void
}

export default function DeleteAcc({settingsForm, deleteAccount}: DeleteAccType): JSX.Element {

    const [password, setPassword] = React.useState<string>('')
    const sendHandler = () => {
        deleteAccount(password)
        setPassword('')
    }

    return (
        <div className={`${s.settingsForm}  ${settingsForm === 2 ? ' h-48 sm:h-32 pb-10' : 'h-0 pb-0'}`}>
            <div className='text-2xl pb-3 font-bold'>Delete account</div>
            <div className='flex flex-col sm:flex-row gap-5 items-center'>
                <input 
                    placeholder='Enter password' 
                    className={s.formInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="text" />
                <button
                    onClick={sendHandler} 
                    className={s.borderButtonAlert} >Confirm</button>
            </div>
        </div>
    )
}
