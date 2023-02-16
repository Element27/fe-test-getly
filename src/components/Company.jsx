import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { BsArrowRight } from 'react-icons/bs'

const Company = () => {
  const [value, setValue] = useState('')

  return (
    <div className='mt-8 '>
      <form className="w-[90%]">
        <div className='formgroup'>
          {/* Company name */}
          <div className='w-full'>
            <label htmlFor='lastname' className='text-xs font-medium' >Company Name
            </label>
            <input type="text" name='lastname' className='input' placeholder='Company' />
          </div>
        </div>
        <div className='formgroup'>
          {/* first name */}
          <div className='w-full'>
            <label htmlFor='firstName' className='text-xs font-medium' >Staff First Name
            </label>
            <input type="text" name='firstName' className='input' placeholder='John' />
          </div>

          {/* last name */}
          <div className='w-full'>
            <label htmlFor='lastname' className='text-xs font-medium' >Staff Last Name
            </label>
            <input type="text" name='lastname' className='input' placeholder='Dosunmu' />
          </div>
        </div>
        <div className='formgroup'>

          {/* state date of birth */}
          <div className='w-full'>
            <label htmlFor='DOB' className='text-xs font-medium' >State Date of Birth
            </label>
            <input type="date" name='DOB' className='input' placeholder='1/12/2000' />
          </div>
          {/* phone number */}
          <div className='w-full'>
            <label htmlFor='number' className='text-xs font-medium' >Phone number
            </label>
            <PhoneInput
              className='input'
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <div className='formgroup'>
          {/* Email */}
          <div className='w-full'>
            <label htmlFor='email' className='text-xs font-medium' >Email
            </label>
            <input type="email" name='email' className='input' placeholder='johndosunmi@abcmail.com' />
          </div>
        </div>

        <div className='formgroup'>
          {/* street address */}
          <div className='w-full'>
            <label htmlFor='email' className='text-xs font-medium' >
              Street Address
            </label>
            <input type="email" name='email' className='input' placeholder='johndosunmi@abcmail.com' />
          </div>
        </div>

        <div className='formgroup'>
          <div className='w-full'>
            <label htmlFor='email' className='text-xs font-medium' >City
            </label>
            <input type="email" name='email' className='input' placeholder='Wuse' />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='text-xs font-medium' >Postal Code
            </label>
            <input type="email" name='email' className='input' placeholder='100001' />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='text-xs font-medium' >State
            </label>
            <input type="email" name='email' className='input' placeholder='Abuja' />
          </div>
        </div>

        <button className='butn'>Next <BsArrowRight /></button>
      </form>
    </div>
  )
}

export default Company