import React from 'react'
import s from '../style.module.css'

type ContactsType = {
    settingsForm: number;
    contactUs: (mail: string, question: string) => void
}

export default function Contacts({settingsForm, contactUs} : ContactsType): JSX.Element {

    const [mail, setMail] = React.useState<string>('')
    const [question, setQuestion] = React.useState<string>('')
    const contactHandler = () => {
        contactUs(mail, question)
        setMail('')
        setQuestion('')
    }

    return (
        <div className={` ${s.settingsForm}  ${settingsForm === 3 ? 'h-64 pb-10' : 'h-0 pb-0'}`}>
            <div className='text-2xl pb-3 font-bold'>Contact us</div>
            <div className='flex flex-col gap-5 w-72 items-center'>
                <div className='flex flex-col gap-4 w-full'>
                    <input 
                        placeholder='Enter your email' 
                        className={s.formInput}
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        type="text" />
                    <input 
                        placeholder='Enter question' 
                        className={s.formInput} 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        type="text" />
                </div>
                <button
                    onClick={contactHandler} 
                    className={s.borderButton + ' w-full'}>Send question</button>
            </div>
        </div>
    )
}
