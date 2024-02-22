import React from 'react'
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Companies from "../components/companies/companies";
import Residencies from "../components/residencies/residencies"
import Value from "../components/value/value";
import Contact from "../components/contact/contact";
import Started from "../components/getstarted/started";
import Footer from "../components/footer/footer";
const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
      <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Started/>
      
    </div>
  )
}

export default Website;