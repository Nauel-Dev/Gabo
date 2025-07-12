import React from 'react';
import './GaboBanner.css';
import gaboImage from './img.png'; // place your GABO image in src/assets

export default function GaboBanner() {
  return (
    <div className="banner">
      <img src={gaboImage} alt="GABO" />
    </div>
  );
}