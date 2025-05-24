import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

const RouteTagger = ({ convoyId }) => {
  const [tagText, setTagText] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleTag = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const tagData = {
        text: tagText,
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        timestamp: new Date()
      };
      
      const convoyRef = doc(db, 'convoys', convoyId);
      updateDoc(convoyRef, {
        routeTags: arrayUnion(tagData)
      });
      setTagText('');
    });
  };

  return (
    <div className="route-tagger">
      <input
        value={tagText}
        onChange={(e) => setTagText(e.target.value)}
        placeholder="Add route note..."
      />
      <button onClick={handleTag}>Tag Location</button>
    </div>
  );
};

export default RouteTagger;