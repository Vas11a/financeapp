import React from 'react'
import s from '../style.module.css'
import Button from 'components/Button'

type ChangeNameType = {
    settingsForm: number;
    changeUserName: (name: string) => void
}

export default function ChangeName({settingsForm, changeUserName}: ChangeNameType ):JSX.Element {

  const [newName, setNewName] = React.useState<string>('')
  const sendHandler = () => {
    changeUserName(newName)
    setNewName('')
  }

  return (
    <div className={` ${s.settingsForm}  ${settingsForm === 1 ? ' h-48 sm:h-32 pb-10': 'h-0 pb-0' }`}>
        <div className='text-2xl pb-3 font-bold'>Change name</div>
        <div className='flex flex-col sm:flex-row gap-5 items-center'>
          <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder='New name' 
            className={s.formInput} 
            type="text" />
          <Button text='Save' fc={sendHandler} extraClasses=' h-sett flex items-center rounded-xl'   />
        </div>
      </div>
  )
}
