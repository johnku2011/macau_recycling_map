import React from 'react';
import '../styles/FloatingActionButtons.css';

const FloatingActionButtons = ({ onLocateMe }) => {
  return (
    <div className="floating-buttons">
      <button className="fab location" onClick={onLocateMe} aria-label="Find my location">
        📍
      </button>
    </div>
  );
};

export default FloatingActionButtons;