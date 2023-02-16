import React, { useState } from 'react'
import Individual from './Individual'
import BasicInfoTab from './BasicInfoTab'
import Company from './Company'
const BasicInfo = () => {

  const [isIndividual, setIsIndividual] = useState(true)
  const [isCompany, setIsCompany] = useState(false)
  return (


    <div>
      <BasicInfoTab isIndividual={isIndividual}
        setIsIndividual={setIsIndividual}
        isCompany={isCompany}
        setIsCompany={setIsCompany}
      />

      {isIndividual && <Individual />}
      {isCompany && <Company />}
    </div>
  )
}

export default BasicInfo
