import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg'
import '../ExploreCars/ExploreCars.css'
 
const carCategories = [
  { name: 'Electric & Hybrid', image: image2},
  { name: 'Sedan', image: image3},
  { name: 'SUV', image: image4},
  { name: 'Truck', image: image5},
  { name: 'Van', image: image6},
]

const ExploreCars = () => {
  return (
    <div className='explore-cars'>
      <h2>Explore Our Cars</h2>
      <div className='car-categories'>
        {carCategories.map((car, index) => (
          <div className='car-card' key={index}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            </div>
        ))}
      </div>
    </div>
    // <Container className='my-5'>
    //   <h2>Explore Our Cars</h2>
    //   <Row>
    //     {carCategories.map((category,idx) => (
    //       <Col key={idx} md={2}>
    //         <Card.Img variant='top' src={category.image} />
    //         <Card.Body>
    //           <Card.Title>{category.name}</Card.Title>
    //         </Card.Body>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
};

export default ExploreCars