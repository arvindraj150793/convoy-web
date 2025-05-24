import React, { useState, useRef } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { db } from '../../config/firebase';
import { doc, setDoc } from "firebase/firestore";

const ConvoyCreation = () => {
  const [convoyName, setConvoyName] = useState('');
  const [routeType, setRouteType] = useState('public');
  const mapRef = useRef(null);

  const handleCreateConvoy = async () => {
    await setDoc(doc(db, "convoys", Date.now().toString()), {
      name: convoyName,
      type: routeType,
      createdAt: new Date()
    });
  };

  return (
    <div className="convoy-creator">
      <input 
        value={convoyName}
        onChange={(e) => setConvoyName(e.target.value)}
        placeholder="Convoy Name"
      />
      <button onClick={handleCreateConvoy}>Create</button>
    </div>
  );
};

export default ConvoyCreation;