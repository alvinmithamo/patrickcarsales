// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import HeroSection from './components/HeroSection/HeroSection';
import ExploreCars from './components/ExploreCars/ExploreCars';
import RecentCars from './components/RecentCars';
import RecentlyAdded from './components/RecentlyAdded';
import CarListing from './components/CarListing/CarListing';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (

    <Router>
      <div className='App'>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element= {<About />} />
          <Route path='/listing' element= {<CarListing />} />
          <Route path='/contact-us' element= {<ContactUs />} />
        </Routes>
      </div>
    </Router>
    // <div className='App'>
    //   <CustomNavbar />
    //   <HeroSection />
    //   <ExploreCars />
    //   <RecentCars />
    //   <RecentlyAdded />
    //   <CarListing />

    //   </div>
    

      
      
  
  );
}

export default App;
