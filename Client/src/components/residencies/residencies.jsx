import React from 'react';
import "./residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from '../../utils/common';
import Propertycard from '../propertycard/propertycard';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';
const Residencies = () => {
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
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className="primaryText">Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
              <Sliderbutton/>
              {
                data.slice(1,10).map((card,i)=>(
                  <SwiperSlide key={i}>
                    <Propertycard card={card}/>
                  </SwiperSlide>

                ))
              }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const Sliderbutton = ()=> {
  const swiper=useSwiper();
  return(
    <div className="flexCenter r-button">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}