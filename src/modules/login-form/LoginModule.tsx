import React from 'react'
import s from './style.module.css'
import axios from 'axios';
import { mainUrl } from 'urls';
import FormInput from 'components/FormInput';
import FormBtn from 'components/FormBtn';
import eyeVisib from '@/assets/imgs/eye-visib.svg';
import eyeNo from '@/assets/imgs/eye-no-visib.svg';
import Spinner from 'components/Spinner';
import { setUserData } from 'store/slices/profileSlice';
import { useAppDispatch } from 'hooks';
import { useNavigate, Link } from 'react-router-dom';
import { isValidEmail } from 'helpers';

function LoginModule({ isLoginPage }: { isLoginPage?: boolean }): JSX.Element {

    const dispatch = useAppDispatch();

    const [emailLocal, setEmailLocal] = React.useState<string>('');
    const [passwordLocal, setPasswordLocal] = React.useState<string>('');

    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [errorText, setErrorText] = React.useState<string>('Error login or password');

    const navigate = useNavigate();

    const login = async () => {
        if (isValidEmail(emailLocal) === false) {
            setErrorText('Invalid email');
            setIsError(true);
            return;
        }
        setIsLoading(true)
        setIsError(false)
        try {
            const res = await axios.post(`${mainUrl}login`, { email: emailLocal, password: passwordLocal });
            dispatch(setUserData(res.data))
            navigate('/user-pannel')
            setEmailLocal('');
            setPasswordLocal('');
            setIsLoading(false);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setErrorText('Error login or password');
                setIsError(true);
                setIsLoading(false);
            } else {
                setErrorText('Server error');
                setIsError(true);
                setIsLoading(false);
            }

        }
    }

    return (
        <div className={`max-w-form w-full ${isLoginPage && 'bg-white p-5 sm:p-8 rounded-3xl'}`}>
            <div className={s.singinLogo}>Sing in <span className='text-oBut font-semibold'>{isLoginPage && 'Financary'}</span></div>
            {
                isError && (
                    <div className={s.error}>{errorText}</div>
                )
            }
            <FormInput
                value={emailLocal}
                changeValue={setEmailLocal}
                placeholder='Enter your email'
                name='Email'
            />
            <FormInput
                value={passwordLocal}
                changeValue={setPasswordLocal}
                placeholder='Enter your password'
                name='Password'
                eyeV={eyeVisib}
                eyeN={eyeNo}
            />
            <Link to={'/reset-password'} className={s.forgotPass} >Forgot password?</Link>
            {
                isLoading && (
                    <div className={s.spinnerCont}><div className={s.spinner}><Spinner /></div></div>
                )
            }

            <FormBtn
                name='Sing in'
                fc={login}
            />

            <div className={s.reg1}>New to Financary?  <Link to={'/registration'} className={s.reg2}> Create account</Link></div>
        </div>
    )
}

export default LoginModule;
