import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import userauthcheck from '../../hooks/userauthcheck';
import { useMutation } from 'react-query';
import UserDetailsContext from '../../context/userdetailscontext';
import { checkfavorite, favorites } from "../../utils/common"
import { tofav } from '../../utils/api';
const Heart = ({id}) => {
    const [heartcolor,setheartcolor]=useState("white");
    const {validateLogin}=userauthcheck();
    const {user}=useAuth0();
    const {userDetails:{favourites},setUserDetails}=useContext(UserDetailsContext)
    useEffect(()=>{
        setheartcolor(()=>checkfavorite(id,favourites))
    },[favourites])
    const { mutate } = useMutation({
        mutationFn: () => tofav(id, user?.email),
        onSuccess: (data, variables, context) => {
            setUserDetails((prev) => ({
                ...prev,
                favourites: favorites(id, prev?.favourites || []) // ensuring prev.favourites is defined
            }));
            console.log('Updated favourites array:',favourites);
        }
    });
    
    const handleLike=()=>{
        if(validateLogin()){
            mutate()
            setheartcolor((prev)=>prev==="#fa3e5f"?"white":"#fa3e5f")
        }else{

        }
    }
  return (
    <AiFillHeart size={24} color={heartcolor} onClick={(e)=>{
        e.stopPropagation()
        handleLike()
    }} />
  )
}

export default Heart