export const calculateTotalDistance = (routePoints) => {
  let distance = 0;
  for (let i = 1; i < routePoints.length; i++) {
    distance += haversineDistance(routePoints[i-1], routePoints[i]);
  }
  return distance.toFixed(2);
};