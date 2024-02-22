import React, { useState } from 'react'
import './header.css'
import {BiMenuAltRight} from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Propertymenu from '../propertymenu/propertymenu';
import Addpropert from '../addpropert/addpropert';
import userauthcheck from '../../hooks/userauthcheck';
import { toast } from 'react-toastify';
const Header = () => {
  const [menuopened,setmenuopen]=useState(false);
  const getmenustyle=(menuopened)=>{
    if(document.documentElement.clientWidth<=800){
      return{right : !menuopened && "-100%"}
    }

  }
  const {validateLogin}=userauthcheck();
  const handleaddproperty=()=>{
    if(validateLogin()){
      setModalOpened(true);
    }
  }
  const [modalOpened,setModalOpened]=useState(false);
  const {loginWithRedirect,isAuthenticated,user,logout}=useAuth0()
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
        <img src="./logo.png" alt="logo" width={100} />
        </Link>
        <OutsideClickHandler
        onOutsideClick={()=>{
          setmenuopen(false);
        }}>
        <div className="flexCenter h-menu"
        style={getmenustyle(menuopened)}>
         <NavLink to="properties">Properties</NavLink>
         <a href='mailto:pavankumarpilaka96@gmail.com'>Contact</a>
          <div onClick={handleaddproperty}>Add Property</div>
          <Addpropert
          opened={modalOpened}
          setOpened={setModalOpened}/>
          { !isAuthenticated?(
            <button className='button' onClick={loginWithRedirect}>
            Login
          </button>
          ):(
            <Propertymenu user={user} logout={logout}/>
          )
}
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setmenuopen((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
  )
}

export default Header