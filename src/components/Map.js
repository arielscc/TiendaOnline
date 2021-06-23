import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_TOKEN}>
      <GoogleMap center={defaultCenter} zoom={9}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
