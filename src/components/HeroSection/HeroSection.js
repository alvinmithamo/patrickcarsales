import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../HeroSection/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>PATRICKCARSALES</h1>
        <p>Certified Salesman in the Automotive Industry</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">KENYAN STOCK</button>
          <button className="btn btn-primary">IMPORT STOCK</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection