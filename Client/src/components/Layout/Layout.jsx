import React, { useContext, useEffect } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'
import { createuser } from '../../utils/api'
import UserDetailsContext from '../../context/userdetailscontext'
import useFavourites from '../../hooks/usefavourites'

const Layout = () => {
  
  const {isAuthenticated,user,getAccessTokenWithPopup}=useAuth0();
  const {setUserDetails}=useContext(UserDetailsContext)
  const {mutate}=useMutation({
    mutationKey:[user?.email],
    mutationFn:()=>createuser(user?.email),
  });
  useEffect(()=>{

    isAuthenticated && mutate()
  },[isAuthenticated])

  return (
    <>
    <div style={{background:"var(--black)",overflow:"hidden"}}>
        <Header/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout