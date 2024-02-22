import React, { useContext, useState } from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import "../properties/properties.css"
import useProperties from '../../hooks/useProperties.jsx';
import { PuffLoader } from 'react-spinners'
import Propertycard from '../../components/propertycard/propertycard.jsx';
import UserDetailsContext from '../../context/userdetailscontext.js';

const Favourites = () => {
  const { data, isError, isLoading, refetch } = useProperties();
  const { userDetails: { favourites } } = useContext(UserDetailsContext);
  console.log(favourites)
// Check bookings from UserDetailsContext

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error While Fetching the data..</span>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
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

   // Check filtered data

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Searchbar />
        <div className="paddings flexCenter properties">
          {
           data
           .filter((property) => favourites.includes(property.id))
              .map((card, i) => (
                <Propertycard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Favourites;
