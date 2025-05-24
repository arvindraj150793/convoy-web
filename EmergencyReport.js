import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

const EmergencyReport = ({ convoyId }) => {
  const [isEmergency, setIsEmergency] = useState(false);

  const handleEmergency = async () => {
    if (!isEmergency) {
      await updateDoc(doc(db, 'convoys', convoyId), {
        emergencies: arrayUnion({
          userId: auth.currentUser.uid,
          timestamp: new Date(),
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      });
      setIsEmergency(true);
    }
  };

  return (
    <button 
      className={`emergency-btn ${isEmergency ? 'active' : ''}`}
      onClick={handleEmergency}
    >
      🚨 {isEmergency ? 'Assistance Requested' : 'Report Emergency'}
    </button>
  );
};

export default EmergencyReport;