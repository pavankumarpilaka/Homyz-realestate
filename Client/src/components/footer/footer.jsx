import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src='./logo2.png' alt='' width={120}/>
                <span className="secondaryText">
                    Our Vision is to make all people <br/>
                    the best place to live
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>2897,Visakhapatnam,530027,India.</span>
                <div className="f-menu">
                    <span>Property</span>
                    <span>Service</span>
                    <span>Products</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer