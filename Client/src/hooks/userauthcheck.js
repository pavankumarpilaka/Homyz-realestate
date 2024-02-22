import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import  {toast} from "react-toastify"

const userauthcheck = () => {
    const {isAuthenticated}=useAuth0()
    const validateLogin=()=>{
        if(!isAuthenticated){
            toast.error("you must loggin in...",{position:"bottom-right"});
            return false;
        }else{
          return true;
        }
    }
  return (
    {
        validateLogin
    }
  )
}

export default userauthcheck