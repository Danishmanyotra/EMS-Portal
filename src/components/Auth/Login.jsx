import React from 'react'
import { useState } from 'react';
const Login = ({handleLogin}) => {
  
 //now we do two way binding
const [email,setEmail] =useState('');
const [password,setPassword] =useState('');

 const submitHandler =(e) =>{
             e.preventDefault()
             handleLogin(email,password);
             setEmail("");
             setPassword("");
 }
 

  return (
    <div className=' h-screen w-screen flex items-center justify-center flex-col' >
          <h1 className='text-5xl text-green-600 mb-40 font-bold'>Welcome to EMS Portal</h1>
       <div className='border-2 border-emerald-600 rounded-xl'>
          <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center p-20'>
            <input required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='border-2 border-emerald-600 rounded-full  px-5 py-3  text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder="Enter your email"/> 


            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
             required className='border-2 border-emerald-600 rounded-full  px-5 py-3  text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder="Enter password"/>
            <button className=' bg-emerald-600 rounded-full  px-27 py-3  text-xl outline-none  placeholder:text-white border-none mt-5'>Log in</button>
          </form>
       </div>
    </div>
  )
}

export default Login
