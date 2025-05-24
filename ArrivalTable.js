import React from 'react';

const ArrivalTable = ({ participants }) => {
  const sortedParticipants = [...participants].sort((a, b) => 
    a.arrivalTime - b.arrivalTime
  );

  return (
    <div className="arrival-table">
      <h3>ARRIVAL RESULTS</h3>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Username</th>
            <th>0-100 km/h</th>
            <th>Max Speed</th>
            <th>Total Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedParticipants.map((participant, index) => (
            <tr key={participant.id}>
              <td>{index + 1}</td>
              <td>{participant.username}</td>
              <td>{participant.zeroToHundred?.toFixed(2) || 'N/A'}s</td>
              <td>{participant.maxSpeed.toFixed(1)} km/h</td>
              <td>{((participant.arrivalTime - participant.startTime)/1000} sec</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrivalTable;