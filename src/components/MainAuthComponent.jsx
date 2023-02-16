import React from 'react'
import logo from '/getly-logo-full-color-rgb 1.png'
import cards from '/ATM Cards 2.png'

const MainAuthComponent = () => {
  return (
    <div className='bg-[#fffdf4] flex flex-col justify-center items-center h-screen w-screen lg:w-[40%]'>
      <img src={logo} alt="logo" className='w-24' />
      <img src={cards} alt="atm cards" className='max-w-sm' />
      <p className='text-base lg:text-sm text-[#14143f] text-center font-semibold'>Quick virtual cards <br />
        for future driven businesses & individuals.</p>
    </div>
  )
}

export default MainAuthComponent