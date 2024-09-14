import React,{ useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth.js'
import {login,logout} from './store/authslice.js'
import {Header,Footer} from './components/index.js'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout({userData}));
      }
    })
    .finally(setloading(false))
  },[])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>

    </div>
  ): <div>Loading</div>
}

export default App
