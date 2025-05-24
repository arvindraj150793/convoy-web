import React, { useEffect } from 'react';
import { googleMapsConfig } from '../../config/maps';

const TrafficLayer = ({ map }) => {
  useEffect(() => {
    if (map && window.google) {
      const trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);
      return () => trafficLayer.setMap(null);
    }
  }, [map]);

  return null;
};

export default TrafficLayer;