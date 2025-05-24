export const calculateAcceleration = (positions) => {
  const validSpeeds = positions.filter(p => p.speed > 2.78); // >10 km/h
  if (validSpeeds.length < 2) return null;
  
  const start = validSpeeds[0];
  const end = validSpeeds[validSpeeds.length - 1];
  const timeDiff = (end.timestamp - start.timestamp) / 1000;
  return (end.speed - start.speed) / timeDiff;
};

export const getMaxSpeed = (positions) => {
  return Math.max(...positions.map(p => p.speed * 3.6));
};