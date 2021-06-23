import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = ({ address, city, state, country }) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${state}${country}&key=${process.env.GOOGLE_MAPS_TOKEN}`;
  useEffect(async () => {
    const response = await axios(API);
    setMap(
      response.data.results[0].geometry.location || { Lat: 12.233, Lng: 23.64 }
    );
  }, []);
  return map;
};

export default useGoogleAddress;
