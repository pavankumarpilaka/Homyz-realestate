import React from 'react';
import "./propertycard.css";
import { useNavigate } from 'react-router-dom';
import Heart from '../heart/heart';
import {truncate} from 'lodash'

const Propertycard = ({ card }) => {
  const navigate = useNavigate();

  // Check if card is empty
  if (!card) {
    return (
      <div className="flexColStart r-card">
        <p>No data available</p>
      </div>
    );
  }



  return (
    <div className="flexColStart r-card" onClick={() => navigate(`../properties/${card.id}`)}>
      <img src={card.image} alt='home' />
      <Heart id={card?.id} />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className='primaryText'>{truncate(card.title, {length: 15})}</span>
      <span className='secondaryText'>{truncate(card.description, {length: 80})}</span>
    </div>
  );
}

export default Propertycard;
