import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth.js'
import { logout } from '../store/authslice.js'
function Logoutbtn() {
  const dispatch =useDispatch();

  const logouthandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout());
    })
  }
  return (
    <button className='inlint-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full' onClick={logouthandler}>Logout</button>
  )
}

export default Logoutbtn;
