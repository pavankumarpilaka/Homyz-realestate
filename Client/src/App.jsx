import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Companies from "./components/companies/companies";
import Residencies from "./components/residencies/residencies"
import Value from "./components/value/value";
import Contact from "./components/contact/contact";
import Started from "./components/getstarted/started";
import Footer from "./components/footer/footer";

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/website";
import React, { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/properties/properties.jsx";
import {QueryClient,QueryClientProvider} from "react-query"
import { ToastContainer } from "react-toastify";
import  {ReactQueryDevtools} from "react-query/devtools"
import Propert from "./pages/property/propert.jsx";
import "react-toastify/dist/ReactToastify.css";
import {PuffLoader} from 'react-spinners'
import UserDetailsContext from "./context/userdetailscontext.js";
import Bookings from "./pages/bookings/bookings.jsx";
import Favourites from "./pages/favourites/favourites.jsx";

function App() {
const queryclient=new QueryClient()
const [userDetails,setUserDetails]=useState({
  favourites:[],
  bookings:[],
});
 return(
  <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>
   <QueryClientProvider client={queryclient}>
   <BrowserRouter>
   <Suspense fallback={<div>Loading....</div>}>
   <Routes>
    <Route element={<Layout />}>
    <Route path="/" element={<Website/>}/>
      <Route path="/properties" >
        <Route index element={<Properties/>}/>
        <Route path=":propertyid" element={<Propert/>}/>
    </Route>
    <Route path="/booking" element={<Bookings/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    </Route>
   </Routes>
   </Suspense>
   </BrowserRouter>
   <ToastContainer/>
   <ReactQueryDevtools initialIsOpen={false}/>
   </QueryClientProvider>
   </UserDetailsContext.Provider>
 )
}
export default App;
