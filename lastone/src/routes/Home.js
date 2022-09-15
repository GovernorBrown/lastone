import React from 'react'
import Navbar from '../components/Navbar'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Home = () => {
    const containerStyle = {
        width: '1440px',
        height: '400px',
      };
      
      const center = {
        lat: 33.753,
        lng: -84.386
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
        { /* Child components, such as markers, info windows, etc. */ < Marker position = {center} />}
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default Home