import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountries } from 'react-phone-number-input'
import { BsArrowRight } from 'react-icons/bs'

const Individual = ({ value, setValue, country,
  setCountry }) => {
  // const [country, setCountry]=useState("NG")


  const ld = getCountries()
  // console.log(ld)
  // console.log(value)
  return (
    <div className='mt-8 '>
      <form className="w-[90%]">
        <div className='formgroup'>
          {/* first name */}
          <div className='w-full'>
            <label htmlFor='firstName' className='text-xs font-medium' >First Name
            </label>
            <input type="text" name='firstName' className='input' placeholder='John' />
          </div>

          {/* last name */}
          <div className='w-full'>
            <label htmlFor='lastname' className='text-xs font-medium' >Last Name
            </label>
            <input type="text" name='lastname' className='input' placeholder='Dosunmu' />
          </div>
        </div>
        <div className='formgroup'>

          {/* date of birth */}
          <div className='w-full'>
            <label htmlFor='DOB' className='text-xs font-medium' >Date of Birth
            </label>
            <input type="date" name='DOB' className='input' placeholder='1/12/2000' />
          </div>
          {/* phone number */}
          <div className='w-full'>
            <label htmlFor='number' className='text-xs font-medium' >Phone number
            </label>
            <PhoneInput
              defaultCountry={country}
              className='input'
              value={value}
              onChange={setValue}
              onCountryChange={setCountry}
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
            <input type="email" name='email' className='input' placeholder='' />
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

export default Individual