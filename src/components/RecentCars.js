import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Subaru from '../images/subaru.jpg';
import CX5 from '../images/CX5.jpg';
import Harrier from '../images/Harrier.jpg'

const recentCars = [
  {
    title: 'Top spec fully loaded executive s450 3000cc',
    price: '8,300,000Ksh',
    originalPrice: '9,500,000Ksh',
    image: Subaru,
    fuel: 'Petrol',
    transmission: 'Auto',
    year: 2018,
  },
  {
    title: 'Metallic black sleek ride AMG kit',
    price: '3,500,000Ksh',
    originalPrice: '4,200,000Ksh',
    image: Harrier,
    fuel: 'Petrol',
    transmission: 'Auto',
    year: 2017,
  },
  {
    title: 'Metallic red rare color w213',
    price: '4,900,000Ksh',
    originalPrice: '5,500,000Ksh',
    image: CX5,
    fuel: 'Petrol',
    transmission: 'Auto',
    year: 2017,
  },
  
]

const RecentCars = () => {
  return (
    <Container className='my-5'>
      <h2>Recent Cars</h2>
      <Row>
        {recentCars.map((car, idx) => (
          <Col key={idx} md={4}>
            <Card>
              <Card.Img variant='top' src={car.image} />
              <Card.Body>
                <Card.Title>{car.title}</Card.Title>
                <Card.Text>
                  <del>{car.originalPrice}</del> <strong>{car.price}</strong>
                  <br />
                  Fuel type: {car.fuel} | Transmission: {car.transmission}
                </Card.Text>
                <Button variant='primary'>{car.year}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default RecentCars