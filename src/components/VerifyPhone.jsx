import axios from 'axios';
import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { BsArrowRight } from 'react-icons/bs'


const VerifyPhone = ({ value, setValue, country,
  setCountry }) => {
  // use axios to read the information about the couitry flags from restcountries.com/api
  const [countries, setCountries] = useState([])

  const onChangefunc = (e) => {
    console.log(e.target.value)
    setCountry(e.target.value)
  }
  // console.log(country)
  useEffect(() => {

    const fetchCountries = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all')
        //  console.log(res.data)
        setCountries(res.data)
      }
      catch (err) { }
    }
    fetchCountries()
  }, [])


  // console.log(countryList)
  // const cflags = countryList.map((country, index) => {
  //   console.log(country)
  // })
  const countryOption = countries.map((cntry, index) => {
    // console.log(cntry.cca2)
    const selectArr = []



    if (cntry.cca2 == country) {
      selectArr.push(
        <option selected defaultValue={cntry.cca2} value={cntry.cca2} key={index} className=''>{cntry.name.common}</option>
      )  // console.log(cntry.cca2)
    } else {
      selectArr.push(
        <option value={cntry.cca2} key={index}>{cntry.name.common}</option>
      )
    }

    return selectArr
  })

  return (
    <div>

      <p className='text-xs md:text-base font-light mb-3'>Select your Country of residence and enter your phone number below to get started.</p>

      <form className="w-[90%] lg:w-[70%] mx-auto lg:mx-0 flex flex-col gap-4">
        <div className='w-full'>
          <label className='label'>Country of Residence</label>
          <select onChange={onChangefunc} className="select">
            {countryOption}
          </select>
        </div>
        <div className='w-full'>
          <label className='label'>Phone number</label>
          <PhoneInput
            defaultCountry={country}
            className='input'
            value={value}
            onChange={setValue}
            onCountryChange={setCountry}
          />
        </div>

        <div className="w-full">
          <label className='label'>Enter the 6 digit code sent to your phone number.</label>

          <div className='inputgroup mt-0'>

            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />

          </div>
          <p className='text-sm font-semibold'>Resend OTP</p>
        </div>
        <button className='butn'>Verify <BsArrowRight /></button>
      </form>
    </div>
  )
}

export default VerifyPhone