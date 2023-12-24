import React from 'react'
import { useAppSelector } from 'hooks'
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    const  {username, email, password, userId} = useAppSelector(state => state.profile);
    const navigate = useNavigate();

    React.useEffect(()=> {
        if (userId === 0) {
            navigate('/')
        }
    }, [])


  return (
    <div>UserPage</div>
  )
}
