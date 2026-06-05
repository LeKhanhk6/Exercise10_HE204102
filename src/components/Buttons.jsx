import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import slideData from '../datas/slide'; 
import pizzasData from '../datas/pizzas';

function Buttons() {
  return (
    <div>
      <Carousel id="pizzaCarousel" fade>
        {slideData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.slide}
              style={{ height: '450px', objectFit: 'cover', filter: 'brightness(60%)' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-4 mb-4">
              <h2 className="fw-bold text-white fs-1">Neapolitan Pizza</h2>
              <p className="fs-5 text-white-50">Authentic Italian taste in every bite</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5 text-center">
        <h2 className="mb-4 fw-bold text-white">Our Menu</h2>
        <Row className="g-4">
          {pizzasData.map((pizza) => (
            <Col xs={12} sm={6} md={4} lg={3} key={pizza.id}>
              <Card className="h-100 position-relative text-white custom-pizza-card">
                {pizza.id!==2 && (
                  <Badge 
                    bg="warning" 
                    className="text-dark position-absolute top-0 start-0 m-2 fw-bold"
                    style={{ zIndex: 1 }}
                  >
                    SALE
                  </Badge>
                )}
                
                <Card.Img 
                  variant="top" 
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                  <div>
                    <Card.Title className="fw-bold text-white mb-2">{pizza.name}</Card.Title>
                    <Card.Text className="mb-3">
                      <span className="text-white-50 text-decoration-line-through me-2">{pizza.oldPrice}</span>
                      <span className="text-warning fw-bold fs-5">{pizza.price}</span>
                    </Card.Text>
                  </div>
                  <Button variant="dark" className="w-100 py-2">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Buttons;