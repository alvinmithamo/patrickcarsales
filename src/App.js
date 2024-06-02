// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import HeroSection from './components/HeroSection';
import ExploreCars from './components/ExploreCars';
import RecentCars from './components/RecentCars';

function App() {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <ExploreCars />
      <RecentCars />
    </div>
  );
}

export default App;
