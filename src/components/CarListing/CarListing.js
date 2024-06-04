import React from 'react';
import '../CarListing/CarListing.css';
import image2 from '../../images/Harrier.jpg'
import RecentCars from '../RecentCars';

const carMakes = [ 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Jaguar', 'Land Rover', 'Lexus', 'Mazda', 'Mercedes', 'Mitsubishi', 'Nissan', 'Range Rover', 'Subaru', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo'];
const carModels = [ 'Model A', 'Model B', 'Model C'];
const carBodyTypes = ['Sedan', 'SUV', 'Truck', 'Van', 'Electric & Hybrid'];

const CarListing = () => {
  return (
    <div className='car-listing'>
      <div className='listing-header'>
        {/* <img src={image2} alt='Listing default' className='header-image' /> */}
        <h1 className='listing-title'>Advanced Search</h1>
      </div>

      <div className='search-filters'>
        <button className='filter-button'>All</button>
        <button className='filter-button'>Import Stock</button>
        <button className='filter-button'>Kenyan Stock</button>
        <select className='filter-select'>
          <option value=''>Make</option>
          {carMakes.map((make, index) => (
            <option key={index} value={make}>{make}</option>
          ))}
        </select>
        <select className='filter-select'>
          <option value=''>Models</option>
          {carModels.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
        <select className='filter-select'>
          <option value=''>Body</option>
          {carBodyTypes.map((body, index) => (
            <option key={index} value={body}>{body}</option>
          ))}
        </select>
        <button className='filter-button'>⚙️</button>
        <button className='search-button'>Search</button>
      </div>
          <RecentCars />

    </div>
  )
}

export default CarListing