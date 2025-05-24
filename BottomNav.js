import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        🏠 Home
      </Link>
      <Link to="/live" className="nav-item">
        🔴 Live
      </Link>
      <Link to="/create-convoy" className="nav-item">
        🚗 Create
      </Link>
      <Link to="/messages" className="nav-item">
        💬 Chat
      </Link>
      <Link to="/profile" className="nav-item">
        👤 Profile
      </Link>
    </nav>
  );
};

export default BottomNav;