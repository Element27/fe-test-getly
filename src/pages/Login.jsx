import React from 'react'
import MainAuthComponent from '../components/MainAuthComponent'

const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <MainAuthComponent />
      <div>
        <form>
          <div className='formUnit'>
            <label htmlFor='email'>Email
              <input type="email" name='email' className='input' placeholder='johndosunmi@abcmail.com' />
            </label>
          </div>
          <div className='formUnit'>
            <label htmlFor='pin'>Pin</label>
            <input type="password" name='pin' pattern="[0-9]*" inputmode="numeric" className='input' placeholder='******' />
          </div>

          <button>log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login