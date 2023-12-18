import React from 'react'
import { useNavigate } from 'react-router-dom';
import { mainUrl } from 'urls';
import axios from 'axios';
import RegistrationModule from 'modules/registration/RegistrationModule';
import Confirm from 'modules/confirm-mail/Confirm';

function RegistrationPage(): JSX.Element {


  const [emailLocal, setEmailLocal] = React.useState<string>('');
  const [passwordLocal, setPasswordLocal] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');

  const [userCode, setUserCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const confirm = async () => {
    setIsLoading(true)
    console.log({ username: userName, email: emailLocal, password: passwordLocal })
    try {
      await axios.post(`${mainUrl}createUser`, { username: userName, email: emailLocal, password: passwordLocal });
      setIsLoading(true)
      navigate('/login');
    } catch (error) {
      alert('Server error');
      setIsLoading(true)
    }
  }



  return (
    <div className='welcome-cont'>
      <div className='flex justify-center pt-4 sm:pt-16'>

        {
          userCode === '' ? (
            <RegistrationModule 
              setUserCode={setUserCode}
              emailLocal={emailLocal}
              setEmailLocal={setEmailLocal}
              passwordLocal={passwordLocal}
              setPasswordLocal={setPasswordLocal}
              userName={userName}
              setUserName={setUserName}
            />
          ) : (
            <Confirm confirm={confirm} isLoading={isLoading} code={userCode} setCode={setUserCode} />
          )
        }
      </div>
    </div>
  )
}

export default RegistrationPage;
