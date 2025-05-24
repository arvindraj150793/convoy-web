import React, { useState, useEffect } from 'react';

const Speedometer = () => {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const kmhSpeed = position.coords.speed * 3.6; // Convert m/s to km/h
        setSpeed(kmhSpeed || 0);
      },
      null,
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="speedometer">
      <div className="dial" style={{ transform: `rotate(${speed * 2}deg)` }}>
        <div className="needle" />
      </div>
      <div className="speed-display">{speed.toFixed(1)} km/h</div>
    </div>
  );
};

export default Speedometer;