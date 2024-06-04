import React from 'react';
import '../CarCard/CarCard.css';

const  CarCard = ({car}) => {
   

  return (
    <div className='car-card'>
        <div className='car-card-header'>
            <span className='featured'>Featured</span>
            <span className='photos-count'>{car.photosCount}</span>
            <span className='year'>{car.year}</span>
        </div>

        <img src={car.image} alt={car.name} className='car-card-image' />
        <div className='car-card-body'>
            <span className='car-type'>{car.type}</span>
            <h3 className='car-title'>{car.name}</h3>
            <p className='car-price'>{car.price}</p>
            {car.oldPrice && <p className='car-old-price'>{car.oldPrice}</p>}
        </div>
        <div className='car-card-footer'>
            <span className='fuel-type'>Fuel type: {car.fuelType}</span>
            <span className='transmission'>Transmission: {car.transmission}</span>
        </div>
    </div>
  )
}

export default CarCard