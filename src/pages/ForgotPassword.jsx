import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MainAuthComponent from '../components/MainAuthComponent'
import { LOGIN } from '../routes'

const ForgotPassword = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row'>
      <MainAuthComponent />
      <div className='w-full md:w-2/3 lg:w-1/3 flex flex-col gap-6 mx-auto px-4 py-5 md:p-0 md:mt-12 lg:ml-24 lg:mt-24 h-fit text-[#494949]'>
        <div>
          <h3 className='text-3xl font-semibold'>Reset Password</h3>
          <p className='text-lg font-normal'>Enter your email address to receive a password reset link.</p>
        </div>
        <form className='flex flex-col gap-4'>

          <div className=''>
            <label htmlFor='email' className='text-xs font-normal' >Email
            </label>
            <input type="email" name='email' className='input' placeholder='johndosunmi@abcmail.com' />
          </div>

          <button className='butn mt-6'>
            Send Reset Link
            <BsArrowRight />
          </button>
        </form>
        <div className='flex flex-col'>
          <p className='text-base font-semibold'>Remember your password? <Link to={LOGIN} className='text-[#171744] cursor-pointer'> Log In</Link></p>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword