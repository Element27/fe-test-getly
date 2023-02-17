import React, { useState } from 'react'
import BasicInfo from '../../components/BasicInfo'
import MainAuthComponent from '../../components/MainAuthComponent'
import Tabs from '../../components/Tabs'
import VerifyPhone from '../../components/VerifyPhone'
import SetPin from '../../components/SetPin'
import logo from '/getly-logo-full-color-rgb 1.png'



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
      <div className='w-full lg:w-2/3 flex flex-col gap-4 mx-4 md:mx-6 lg:mx-auto px-4 py-5 md:p-0 lg:mt-16 lg:mr-12 lg:ml-24 h-fit'>

        <div className='flex justify-center items-center flex-col lg:items-start'>
          <img src={logo} alt="" className='w-16 md:w-20 lg:hidden mb-4' />
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
        {isVerifyActive && <VerifyPhone value={value} setValue={setValue} country={country} setCountry={setCountry} />}
        {isSetpinActive && <SetPin />}


      </div>
    </div>
  )
}

export default CreateAccount