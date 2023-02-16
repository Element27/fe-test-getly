import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MainAuthComponent from '../components/MainAuthComponent'
import { FORGOTPASSWORD } from '../routes'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row'>
      <MainAuthComponent />
      <div className='w-full md:w-2/3 lg:w-1/3 flex flex-col gap-6 mx-auto px-4 py-5 md:p-0 md:mt-12 lg:ml-24 lg:mt-24 h-fit text-[#494949]'>
        <div>
          <h3 className='text-3xl font-semibold'>Sign In</h3>
          <p className='text-lg font-normal'>Sign in to access your dashboard</p>
        </div>
        <form className='flex flex-col gap-4'>

          <div className=''>
            <label htmlFor='email' className='text-xs font-normal' >Email
            </label>
            <input type="email" name='email' className='input' placeholder='johndosunmi@abcmail.com' />
          </div>

          <div className=''>
            <label htmlFor='pin' className='text-xs font-normal mt-8'>Pin</label>
            <input type="password" name='pin' pattern="[0-9]*" inputmode="numeric" className='input' placeholder='******' />
          </div>

          <button className='butn mt-6'>
            log in
            <BsArrowRight />
          </button>
        </form>
        <div className='flex flex-col'>
          <p className='text-base font-semibold'>Forgot your password? <Link to={FORGOTPASSWORD} className='text-[#4444ee] cursor-pointer'>Reset Password</Link></p>
          <p className='text-base font-semibold'>Don't have an account?<span className='text-[#4444ee] cursor-pointer'> Create One</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login