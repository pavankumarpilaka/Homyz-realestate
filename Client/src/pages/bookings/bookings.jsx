import React, { useContext, useState } from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import "../properties/properties.css"
import useProperties from '../../hooks/useProperties.jsx';
import { PuffLoader } from 'react-spinners'
import Propertycard from '../../components/propertycard/propertycard.jsx';
import UserDetailsContext from '../../context/userdetailscontext.js';

const Bookings = () => {
  const { data, isError, isLoading, refetch } = useProperties();
  const { userDetails: { bookings } } = useContext(UserDetailsContext);
  
  console.log("Data:", data); // Check data from useProperties hook
  console.log("Error:", isError); // Check if isError is true/false
  console.log("Loading:", isLoading); // Check if isLoading is true/false
  console.log("Bookings:", bookings); // Check bookings from UserDetailsContext

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

  
  console.log("Filtered Data:", data.filter(property => bookings.map(booking => booking.id).includes(property.id))); // Check filtered data

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Searchbar />
        <div className="paddings flexCenter properties">
          {
            data
            .filter((property) =>
              bookings.map((booking) => booking.id).includes(property.id)
            )
              .map((card, i) => (
                <Propertycard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Bookings;
