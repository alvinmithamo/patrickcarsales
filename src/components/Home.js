import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import ExploreCars from './ExploreCars/ExploreCars';
import RecentCars from './RecentCars';
import RecentlyAdded from './RecentlyAdded';

const Home = () => {
  return (
    <div> 
    <HeroSection />
    <ExploreCars />
    <RecentCars />
    <RecentlyAdded />
    </div>
   


    

  );
};

export default Home