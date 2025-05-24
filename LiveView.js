import React, { useState } from 'react';
import MapView from './MapView';
import LiveStreamPlayer from '../shared/LiveStreamPlayer';
import PerformanceTracker from './PerformanceTracker';

const LiveView = ({ convoy }) => {
  const [selectedStream, setSelectedStream] = useState(null);
  
  return (
    <div className="live-view">
      {!selectedStream ? (
        <>
          <MapView 
            routePoints={convoy.route} 
            members={convoy.members} 
          />
          <div className="member-list">
            <h4>Participants</h4>
            {convoy.members.map(member => (
              <div 
                key={member.id} 
                className="member-item"
                onClick={() => setSelectedStream(member)}
              >
                <span>{member.username}</span>
                <span>{member.speed} km/h</span>
              </div>
            ))}
          </div>
          <PerformanceTracker userId={convoy.creatorId} />
        </>
      ) : (
        <LiveStreamPlayer 
          channel={selectedStream.streamChannel} 
          role="audience"
          onClose={() => setSelectedStream(null)}
        />
      )}
    </div>
  );
};

export default LiveView;