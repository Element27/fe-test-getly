import React, { useState } from 'react'
import BasicInfo from '../../components/BasicInfo'
import MainAuthComponent from '../../components/MainAuthComponent'
import { Link, Outlet } from "react-router-dom"
import Tabs from '../../components/Tabs'
import VerifyPhone from '../../components/VerifyPhone'
import SetPin from '../../components/SetPin'
const CreateAccount = () => {

  const [isBasicActive, setIsBasicActive] = useState(true)
  const [isVerifyActive, setIsVerifyActive] = useState(false)
  const [isSetpinActive, setIsSetpinActive] = useState(false)
  
  const [value, setValue] = useState('')
  const [country, setCountry] = useState('NG')


  return (
    <div className='flex flex-col justify-center  lg:flex-row'>
      <div className='hidden lg:block lg:w-[40%]  text-[#494949]'>
        <MainAuthComponent />
      </div>
      <div className='w-full md:w-2/3 flex flex-col gap-4 mx-auto px-4 py-5 md:p-0 lg:mt-16 lg:mr-12 lg:ml-24 h-fit'>
        <div>
          <h3 className='heading'>Create Account</h3>
          <p className='subheading'>Kindly fill in the details below</p>
        </div>
    
        <Tabs
          setIsBasicActive={setIsBasicActive}
          setIsVerifyActive={setIsVerifyActive}
          setIsSetpinActive={setIsSetpinActive}
          isBasicActive={isBasicActive}
          isVerifyActive={isVerifyActive}
          isSetpinActive={isSetpinActive}
        />
      
        {/* <BasicInfo /> */}
        {isBasicActive && <BasicInfo value={value} setValue={setValue} 
        country={country}
        setCountry={setCountry}
        />}
        {isVerifyActive && <VerifyPhone value={value} setValue={setValue} country={country} setCountry={setCountry}/>}
        {isSetpinActive && <SetPin />}

        <p className='text-base font-semibold'>Already have an account? <Link className='text-[#171744] cursor-pointer'> Sign In </Link></p>
      </div>
    </div>
  )
}

export default CreateAccount