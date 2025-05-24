import React, { useEffect, useRef } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { googleMapsConfig } from '../../config/maps';
import { createRoutePolyline } from '../../utils/maps';

const MapView = ({ routePoints, members }) => {
  const mapRef = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    if (mapRef.current && window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: routePoints[0] || { lat: 0, lng: 0 },
        zoom: 12,
        disableDefaultUI: true
      });

      // Draw route
      const routeLine = createRoutePolyline(map, routePoints);
      
      // Add member markers
      markers.current = members.map(member => 
        new window.google.maps.Marker({
          position: member.position,
          map: map,
          title: member.username
        })
      );

      return () => {
        routeLine.setMap(null);
        markers.current.forEach(m => m.setMap(null));
      };
    }
  }, [routePoints, members]);

  return (
    <LoadScript googleMapsApiKey={googleMapsConfig.apiKey} libraries={googleMapsConfig.libraries}>
      <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
    </LoadScript>
  );
};

export default MapView;