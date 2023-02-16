import React, { useState } from 'react'
import BasicInfo from './BasicInfo'

const Tabs = ({ setIsBasicActive,
  setIsVerifyActive,
  setIsSetpinActive, isBasicActive,
  isVerifyActive,
  isSetpinActive }) => {

  const toggleBasicActive = () => {
    setIsBasicActive(true)
    setIsVerifyActive(false)
    setIsSetpinActive(false)
  }
  const toggleVerifyActive = () => {
    setIsBasicActive(false)
    setIsVerifyActive(true)
    setIsSetpinActive(false)
  }
  const toggleSetpinActive = () => {
    setIsBasicActive(false)
    setIsVerifyActive(false)
    setIsSetpinActive(true)
  }

  return (
    <div >
      <div className='flex justify-between items-center border-b border-b-[#898a8d]'>

        {/* Navigating through the tabs will be handled on the form. when the form information is fully filled, user is able to navigate to the next tab and fill the next information, the next tab will also allow navigation to the previous tab and possible allow the information to be viewed */}

        <p className='text-lg font-normal text-left w-1/3 '>
          <span className={`${isBasicActive && "isActive"} cursor-pointer `}
            onClick={toggleBasicActive}
          >Basic Information</span></p>
        <p className='text-lg font-normal text-left w-1/3'>
          <span className={`${isVerifyActive && "isActive"} cursor-pointer `}
            onClick={toggleVerifyActive}
          >Verify Phone</span></p>
        <p className='text-lg font-normal text-left w-1/3'>
          <span className={`${isSetpinActive && "isActive"} cursor-pointer `}
            onClick={toggleSetpinActive}
          >Set PIN</span></p>
      </div>
    </div>
  )
}

export default Tabs