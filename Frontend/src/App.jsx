import React, { useContext } from 'react'
import SignUp from './pages/Signup.jsx'
import SignIn from './pages/Signin.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Customize from './pages/Customize.jsx'
import { userDataContext } from './context/userDataContext.js'
import Home from './pages/Home.jsx'
import Customize2 from './pages/Customize2.jsx'

function App() {
  const { userData, setUserData,loading } = useContext(userDataContext)
 
  if (loading) {
    return <div>Loading... <div><img src="./assets/user.gif" alt="" /></div> </div> 
  }
  return (
    <Routes>
      <Route path='/' element={(userData?.assistantImage && userData?.assistantName) ? <Home /> : <Navigate to={"/customize"} />} />
      <Route path='/signup' element={!userData ? <SignUp /> : <Navigate to={"/"} />} />
      <Route path='/signin' element={!userData ? <SignIn /> : <Navigate to={"/"} />} />
      <Route path='/customize' element={userData ? <Customize /> : <Navigate to={"/signup"} />} />
      <Route path='/customize2' element={userData ? <Customize2 /> : <Navigate to={"/signup"} />} />
    </Routes>
  )
}

export default App