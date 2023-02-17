import React, { useState } from 'react'
import Individual from './Individual'
import { Link } from "react-router-dom"
import BasicInfoTab from './BasicInfoTab'
import Company from './Company'
import { LOGIN } from '../routes'
const BasicInfo = ({ value, setValue, country,
  setCountry }) => {


  const [isIndividual, setIsIndividual] = useState(true)
  const [isCompany, setIsCompany] = useState(false)
  return (

    <div>
      <BasicInfoTab isIndividual={isIndividual}
        setIsIndividual={setIsIndividual}
        isCompany={isCompany}
        setIsCompany={setIsCompany}
      />

      {isIndividual && <Individual value={value} setValue={setValue} country={country} setCountry={setCountry} />}
      {isCompany && <Company value={value} setValue={setValue} country={country} setCountry={setCountry} />}

      <p className='text-base font-semibold'>Already have an account? <Link to={LOGIN} className='text-[#171744] cursor-pointer'> Sign In </Link></p>
    </div>
  )
}

export default BasicInfo
