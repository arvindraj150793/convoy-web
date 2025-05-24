import React from 'react';

const Disclaimer = () => {
  return (
    <div className="legal-disclaimer">
      <h3>Safety & Compliance Notice</h3>
      <p>By using this application, you agree to:</p>
      <ul>
        <li>Observe all local traffic laws and speed limits</li>
        <li>Maintain full control of your vehicle at all times</li>
        <li>Not share sensitive location data with unauthorized parties</li>
        <li>Assume full responsibility for convoy participation</li>
      </ul>
      <p>Speed data is recorded for personal reference only - do not use for competitive purposes.</p>
    </div>
  );
};

export default Disclaimer;