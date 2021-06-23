import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = ({ address }) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_TOKEN}`;
  useEffect(async () => {
    const response = await axios(API);
    setMap(
      response.data?.results[0].geometry.location || {
        lat: -16.5321058,
        lng: -68.0988833,
      }
    );
  }, []);
  return map;
};

export default useGoogleAddress;
