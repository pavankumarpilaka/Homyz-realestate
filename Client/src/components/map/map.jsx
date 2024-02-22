import React from 'react'
import {MapContainer, TileLayer} from "react-leaflet"
import Geocodermark from '../geocodermarker/geocodermark'
const Map = ({address,city,country}) => {
  return (
    <MapContainer
     center={[53.35,18.8]}
     zoom={1}
     scrollWheelZoom={false}
     style={
      {heigth:"40vh",width:"100%",marginTop:"20px",zIndex:0,background:"red",}
     }
     >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <Geocodermark address={`${address} ${city} ${country}`}/>
     </MapContainer>
  )
}

export default Map