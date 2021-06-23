import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const defaultCenter = {
    lat: 19.12313,
    lng: -99.32334,
  };
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDd84JFmF7XwyJNZoZiWPamZl8-rWl4_lc">
        <GoogleMap center={defaultCenter} zoom={9}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
