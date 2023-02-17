import React from 'react'

const SetPin = () => {
  return (
    <div>


      <form className="w-[90%] lg:w-[70%]  flex flex-col gap-4">
        <p className='text-sm font-normal mb-3'>Set a 6 digit account security PIN</p>

        <div className="w-full">
          <div className='inputgroup mt-0'>

            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
            <input type="text" className="inputBoxGroup" inputMode='numeric' maxLength={1} />
          </div>
        </div>
        <button className='butn'>Create Account</button>
      </form>
    </div>
  )
}

export default SetPin