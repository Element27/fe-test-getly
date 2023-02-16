import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/AuthPages/ForgotPassword'
import Login from './pages/AuthPages/Login'
import { BASICINFO, CREATEACCOUNT, FORGOTPASSWORD, LOGIN, SETPIN, VERIFYPHONE } from './routes'
import CreateAccount from './pages/Onboarding/CreateAccout'
import BasicInfo from './components/BasicInfo'
import VerifyPhone from './components/VerifyPhone'
import SetPin from './components/SetPin'


function App() {

  return (
    <div className="w-screen overflow-hidden">
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={CREATEACCOUNT} element={<CreateAccount />} />

      </Routes>
    </div>
  )
}

export default App
