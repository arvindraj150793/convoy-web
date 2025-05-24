export const startTracking = (convoyId, onUpdate) => {
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        speed: position.coords.speed,
        timestamp: Date.now()
      };
      
      // Update Firestore
      const convoyRef = doc(db, 'convoys', convoyId);
      updateDoc(convoyRef, {
        [`members.${auth.currentUser.uid}`]: location
      });

      onUpdate(location);
    },
    (error) => console.error('Tracking error:', error),
    { enableHighAccuracy: true, maximumAge: 1000 }
  );

  return () => navigator.geolocation.clearWatch(watchId);
};