import React from 'react'
import Navbar from '../components/Navbar'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Friends = () => {
  const containerStyle = {
    width: '1440px',
    height: '400px',
  };
  
  const center = {
    lat: 33.7490,
    lng: 84.3880
  };
  return (
    <div>
        <Navbar />
        <LoadScript
      googleMapsApiKey="AIzaSyCzxg5121pjD5zxscx86-MNhzZZ9HRSpAo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
         
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default Friends