import {React,useState,useEffect} from 'react';
import { userDataContext } from './userDataContext.js';
import axios from "axios"

function UserContext({ children }) {
  const serverUrl = 'http://localhost:8000';
  const [userData, setUserData] = useState(null)
  const [frontendImage, setFrontendImage] = useState(null)
  const [backendImage, setBackendImage] = useState(null)
  const [selectedImage,setSelectedImage]=useState(null)
  const [loading, setLoading] = useState(true)

  

  const handleCurrentUser =async () => { 
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
      setUserData(result.data.user)
      // console.log(result.data)
        console.log("User from server on refresh:", result.data);
    } catch (error) {
        console.log("Error from context",error)
    } finally{
      setLoading(false)
    }
   }


   const getGeminiResponse = async(command)=>{
    try {
      const result = await axios.post(`${serverUrl}/api/user/asktoassistant`,{command},{withCredentials:true})
      return result.data
    } catch (error) {
      console.log(error)
    }
   }


   useEffect(() => {
     handleCurrentUser()
   }, [])
   
  return (
    <userDataContext.Provider value={{serverUrl,userData,setUserData,frontendImage,backendImage,selectedImage,setFrontendImage, setBackendImage, setSelectedImage,loading,handleCurrentUser,getGeminiResponse}}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;