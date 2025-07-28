import { React, useContext, useState } from 'react'
import bg from '../assets/bg.png'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/userDataContext.js';
import axios from "axios"

function Signin() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const { serverUrl,setUserData } = useContext(userDataContext)

  const handleSignin = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await axios.post(`${serverUrl}/api/auth/signin`, { email, password }, { withCredentials: true })
      setUserData(result.data)
      setLoading(false)
      navigate("/customize")
    } catch (error) {
      console.log("Error from handle signin", error)
      setUserData(null)
      setErr(error.response?.data?.message || error?.response?.data?.Message)
      setLoading(false)
    }
  }
  return (
    < div className='w-full h-[100vh] bg-no-repeat bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }
    }>

      <form className='w-[90%] h-[550px] max-w-[500px] bg-[#00000041] backdrop-blur shadow-black-950 flex flex-col items-center justify-center gap-[20px] px-[20px]' onSubmit={handleSignin}>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]' >
          Login to <span className='text-blue-400'>Virtual Assistance</span></h1>

        <input type="email" placeholder='Email' name='email' className='w-full h-[60px] outline-none border-2 border-white text-white placeholder-gray-300 bg-transparent px-[20px] py-[10px] rounded-full text-[18px]' onChange={(e) => setEmail(e.target.value)} value={email} />

        <div className=' relative w-full h-[60px] border-2 border-white text-white  rounded-full text-[18px] '>
          <input type={show ? "text" : "password"} name='password' placeholder='password' className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300  px-[20px] py-[10px]' onChange={(e) => setPassword(e.target.value)} value={password} />

          {!show ? <IoMdEye className='absolute top-[20px] right-[20px] text-white w-[25px] h-[25px]' onClick={() => setShow(true)} /> : show && <IoMdEyeOff className='absolute top-[20px] right-[20px] text-white w-[25px] h-[25px]' onClick={() => setShow(false)} />}

        </div>
        {err && err.length > 0 && (
          <p className='text-red-500 text-[17px]'>*{err}</p>
        )}

        <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px]' disabled={loading}>
          {loading ? "Loading.." : "SignIn"}
        </button>
        <p className='text-white text-[18px] cursor-pointer'>Do you have an account ? <span className='text-blue-400' onClick={() => navigate('/signup')}>Signup</span></p>

      </form>
    </div >
  )
}

export default Signin