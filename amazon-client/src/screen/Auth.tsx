import React, { useCallback, useState } from 'react'
import Inputs from '../components/Inputs'
import { makeRequest } from '../makeRequest'
import { useDispatch } from 'react-redux'
import {  loginSuccess } from '../redux/user'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState('login')
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [name, setName] = useState<string>()
  const [confirmedPassword, setConfirmedPassword] = useState<string>()
  const dispatch = useDispatch()
  const sendUser = async () => {
    if (toggle === 'login') {
      await makeRequest.post('/auth/login', { email, password }).then((res) => { dispatch(loginSuccess(res.data)); navigate('/Home') }).catch(err => { alert(err.response.data) })
    } else {
      await makeRequest.post('/auth/register', { email, password, name }).then((res) => { dispatch(loginSuccess(res.data)); navigate('/Home') }).catch(err => { console.log(err) })
    }
  }
  const handleToggle = useCallback(() => {
    setToggle((active) => active === 'login' ? 'register' : 'login')
  }, [])
  return (
    <div className='flex  flex-col justify-start p-5 items-center bg-white w-full h-full'>
      <img className='w-[120px] h-[38px] ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='ww' />
      <div className=' border-[1px] border-gray-300 flex flex-col translate-y-3 p-7 rounded-md sm:w-1/3 space-y-2 mini:w-full'>
        {toggle === 'login' ?
          <>
            <Inputs id='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder='' type='text' value={email} name='email' />
            <Inputs id='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder='' type='password' value={password} name='password' />
          </>
          :
          <>
            <Inputs id='name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder='First and last Name' type='text' value={name} name='name' />
            <Inputs id='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder='At least 6 characters' type='password' value={password} name='password' />
            <Inputs id='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmedPassword(e.target.value)} placeholder='' type='password' value={confirmedPassword} name='Re-enter password' />
            <Inputs id='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder='' type='text' value={email} name='email' />
          </>

        }
        <button className=' h-fit bg-yellow-300 rounded-md w-11/12 p-1 mt-3 hover:bg-yellow-400' onClick={sendUser}>Continue</button>
        <h6 className='justify-start items-start text-xs text-start mt-5'>By continuing, you agree to Amazon's <span className='text-[#0066c0] hover:text-red-600 hover:border-b-[1px] border-red-600'>Conditions of Use </span> and <span className='text-[#0066c0] hover:text-red-600 hover:border-b-[1px] border-red-600'>Privacy Notice.</span> </h6>
        <div className='text-xs text-start mt-5'>
          <h6 className='text-[#0066c0] hover:text-red-600 hover:border-b-[1px] border-red-600 w-fit'>Need Help?</h6>
        </div>
      </div>


      <div className='flex flex-row items-center text-xs justify-center mt-10 sm:w-1/3 w-full'>

        {toggle === 'login' ?
          <>
            <div className='bg-gray-300 w-full h-[1px]' />
            <h6 className='w-full'>New to Amazon?</h6>
            <div className='bg-gray-300 w-full h-[1px]' />
          </>
          :
          <h6>
            Already have an account? <span className='cursor-pointer text-[#0066c0] hover:border-b-[1px] border-[#0066c0]' onClick={handleToggle}>Sign in </span> </h6>
        }


      </div>
      {toggle === 'login' ?
        <button onClick={handleToggle} className=' sm:w-1/3 mini:w-2/3 mini:h-7 rounded-md border-[1px] border-gray-300 hover:bg-gray-100 mt-5 sm:text-base mini:text-sm'>Create your amazon account</button>
        :
        <span></span>
      }
    </div>
  )
}

export default Auth