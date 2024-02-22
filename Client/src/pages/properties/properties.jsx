import React, { useState } from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import "./properties.css";
import useProperties from '../../hooks/useProperties.jsx';
import {PuffLoader} from 'react-spinners'
import Propertycard from '../../components/propertycard/propertycard.jsx';
const Properties = () => {
  const { data, isError, isLoading, refetch } = useProperties();
  
  if(isError){
    return(
      <div className="wrapper">
        <span>Error While Fetching the data..</span>
      </div>
    )
  }
  if(isLoading){
     return(
      <div className="wrapper flexCenter" style={{height:"60vh"}}>
         <PuffLoader
         height="80"
         width="80"
         radius={1}
         color='#4066ff'
         aria-label='Puff-Loading'
          />
      </div>
     )
  }
    return (
      <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <Searchbar/>
          <div className="paddings flexCenter properties">
            {
             data
             .map((card, i) => (
               <Propertycard card={card} key={i} />
             ))
            
            }
            </div>
          
        </div>
      </div>
    );
  

  
};

export default Properties;
