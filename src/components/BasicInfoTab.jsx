import React, { useState } from 'react'
import { FiUser, FiUsers } from 'react-icons/fi'

const BasicInfoTab = ({ isIndividual,
  setIsIndividual,
  isCompany,
  setIsCompany }) => {

  const toggleIndividual = () => {
    setIsIndividual(true)
    setIsCompany(false)
  }
  const toggleCompany = () => {
    setIsIndividual(false)
    setIsCompany(true)
  }

  return (
    <div className='flex gap-8 '>
      <button className={`text-sm font-normal flex gap-3 justify-center items-center px-3 py-3 rounded border ${isIndividual ? "border-[#f7c148]" : "border-[#dadada]"}`} onClick={toggleIndividual}>
        Individual
        <FiUser className={`${isIndividual ? "text-[#f7c148]" : "text-[#494949]"} text-xl`} />
      </button>

      <button className={`text-sm font-normal flex gap-3 justify-center items-center px-3 py-3 rounded border ${isCompany ? "border-[#f7c148]" : "border-[#dadada]"}`} onClick={toggleCompany}>
        Company
        <FiUsers className={`${isCompany ? "text-[#f7c148]" : "text-[#494949]"}  text-xl`} />
      </button>
    </div>
  )
}

export default BasicInfoTab