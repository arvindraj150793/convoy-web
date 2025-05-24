export const loadGoogleMaps = (apiKey, libraries = []) => {
  return new Promise((resolve) => {
    if (window.google?.maps) return resolve(window.google.maps);
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`;
    script.onload = () => resolve(window.google.maps);
    document.head.appendChild(script);
  });
};

export const createRoutePolyline = (map, coordinates, color = '#FF0000') => {
  return new window.google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map
  });
};