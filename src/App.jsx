import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import { FORGOTPASSWORD, LOGIN } from './routes'


function App() {

  return (
    <div className="">
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={FORGOTPASSWORD} element={<ForgotPassword />} />
        {/* <Route path={FORGOTPASSWORD} element={<ForgotPassword />} /> */}
      </Routes>
    </div>
  )
}

export default App
