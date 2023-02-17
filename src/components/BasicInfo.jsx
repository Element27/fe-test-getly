import React, { useState } from 'react'
import Individual from './Individual'
import BasicInfoTab from './BasicInfoTab'
import Company from './Company'
const BasicInfo = ({value, setValue,country,
  setCountry}) => {


  const [isIndividual, setIsIndividual] = useState(true)
  const [isCompany, setIsCompany] = useState(false)
  return (

    <div>
      <BasicInfoTab isIndividual={isIndividual}
        setIsIndividual={setIsIndividual}
        isCompany={isCompany}
        setIsCompany={setIsCompany}
      />

      {isIndividual && <Individual value={value} setValue={setValue} country={country} setCountry={setCountry}/>}
      {isCompany && <Company value={value} setValue={setValue} country={country} setCountry={setCountry}/>}
    </div>
  )
}

export default BasicInfo
