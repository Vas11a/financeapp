import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ResetPass from 'pages/ResetPass';
import { useAppSelector } from 'hooks';

function Routing(): JSX.Element {

  const  {username, email, password} = useAppSelector(state => state.profile)


  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/reset-password' element={<ResetPass/>} />
        <Route path='/user-pannel' element={<div><div>{username}</div><div>{email}</div><div>{password}</div></div>} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  )
}

export default Routing