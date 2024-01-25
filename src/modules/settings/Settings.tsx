import React from 'react'
import s from './style.module.css'
import ChangeName from './parts/ChangeName'
import DeleteAcc from './parts/DeleteAcc'
import Contacts from './parts/Contacts'

type SettingsType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function Settings({ setIsLoading, setErrorText, setIsError }: SettingsType): JSX.Element {
  const [settingsForm, setSettingsForm] = React.useState(0)
  const logout = () => {
    setSettingsForm(0)
  }
  return (
    <div className='h-full'>
      <ChangeName settingsForm={settingsForm} />
      <DeleteAcc settingsForm={settingsForm} />
      <Contacts settingsForm={settingsForm} />

      
      <div className='flex justify-center gap-10'>
        <button onClick={logout} className={s.button}>Log out</button>
        <button onClick={() => setSettingsForm(1)} className={s.button}>Change name</button>
        <button onClick={() => setSettingsForm(2)} className={s.buttonDelete}>Delete accaunt</button>
        <button onClick={() => setSettingsForm(3)} className={s.button}>Contact us</button>
      </div>
    </div>
  )
}
