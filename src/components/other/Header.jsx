import React from 'react'
import { useState } from 'react';
const Header = (props) => {
  const userObj = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  const firstName = userObj?.data?.firstName ||userObj?.firstName ||'Admin';
  // const [username,setUserName]= useState('');

  // if(!data) {
  //   setUserName('Admin')
  // }
  // else {
  //   setUserName(data.firstName)
  // }
  
  const logOutUser =()=>{
localStorage.removeItem('loggedInUser','')
props.changeUser(null);
// console.log(props.changeUser)
// window.location.reload()
  };
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold '>{firstName}👋</span></h1>
      <button onClick ={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium '>Log Out</button>
    </div>
  )
}

export default Header
