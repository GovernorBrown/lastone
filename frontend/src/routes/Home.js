import React from 'react'
import Navbar from '../components/Navbar'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Home = () => {
    const containerStyle = {
        width: '400px',
        height: '400px',
      };
      
      const center = {
        lat: -5.745,
        lng: 28.523
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

export default Home