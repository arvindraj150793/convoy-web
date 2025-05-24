import React, { useState, useEffect } from 'react';
import { calculateAcceleration, getMaxSpeed } from '../../utils/performance';

const PerformanceTracker = ({ userId }) => {
  const [metrics, setMetrics] = useState({
    zeroToHundred: null,
    maxSpeed: 0,
    positions: []
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setMetrics(prev => {
          const newPositions = [...prev.positions, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            speed: position.coords.speed,
            timestamp: Date.now()
          }].slice(-50); // Keep last 50 positions
          
          return {
            positions: newPositions,
            zeroToHundred: calculateAcceleration(newPositions),
            maxSpeed: getMaxSpeed(newPositions)
          };
        });
      },
      (error) => console.error('GPS Error:', error),
      { enableHighAccuracy: true, maximumAge: 1000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="performance-metrics">
      <h3>Performance Metrics</h3>
      <p>0-100 km/h: {metrics.zeroToHundred?.toFixed(2) || 'N/A'}s</p>
      <p>Max Speed: {metrics.maxSpeed.toFixed(1)} km/h</p>
    </div>
  );
};

export default PerformanceTracker;