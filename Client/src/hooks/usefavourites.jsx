import React, { useContext, useRef } from 'react'
import UserDetailsContext from '../context/userdetailscontext'
import { useQuery } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'

const useFavourites = () => {
    const {userDetails,setUserDetails}=useContext(UserDetailsContext)
    const queryRef=useRef()
    const {user}=useAuth0()
    const {data,isLoading,isError,refetch}=useQuery({
        queryKey:"allfavourites",
        queryFn:()=>getallfav(user?.email),
        onSuccess:(data)=>setUserDetails((prev)=>({prev,favourites:data})),
        enabled:user!=undefined,
        staleTime:30000
    })
    queryRef.current=refetch;
    
    return (
     <div>Hello world</div>
  )
}

export default useFavourites