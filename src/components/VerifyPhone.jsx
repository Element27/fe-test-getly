import axios from 'axios';
import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


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

    selectArr.push(
      <option value={cntry.cca2} key={index}>{cntry.name.common}</option>
    )

    if (cntry.cca2 == country) {
      selectArr.push(
        <option selected value={cntry.cca2} key={index} className=''>{cntry.name.common}</option>
      )  // console.log(cntry.cca2)
    }

    return selectArr
  })

  return (
    <div>


      <form >
        <select onChange={onChangefunc}>
          {countryOption}
        </select>

        <PhoneInput
          defaultCountry={country}
          className='input'
          value={value}
          onChange={setValue}
          onCountryChange={setCountry}
        />
      </form>
    </div>
  )
}

export default VerifyPhone