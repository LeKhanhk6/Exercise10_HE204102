import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormControlComponent() {
  return (
    <Container className="my-5 text-center" style={{ maxWidth: '800px' }}>
      <h2 className="mb-4 fw-bold text-white">Book Your Table</h2>
      <Form>
        <Row className="g-3 justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <Form.Group controlId="formGridName">
              <Form.Label className="text-white fw-semibold small">Your Name *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                className="bg-dark text-white border-secondary py-2 shadow-none custom-placeholder"
                required 
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <Form.Group controlId="formGridDate">
              <Form.Label className="text-white fw-semibold small">Date *</Form.Label>
              <Form.Control 
                type="date" 
                className="bg-dark text-white border-secondary py-2 shadow-none"
                required 
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <Form.Group controlId="formGridService">
              <Form.Label className="text-white fw-semibold small">Select a Service *</Form.Label>
              <Form.Select 
                defaultValue="" 
                className="bg-dark text-white border-secondary py-2 shadow-none"
                required
              >
                <option value="" disabled>Choose service...</option>
                <option value="dine-in">Dine In</option>
                <option value="take-away">Take Away</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} className="text-center mt-3">
            <Form.Group controlId="formGridMessage">
              <Form.Label className="text-white fw-semibold small">Please share your message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Write your message..." 
                className="bg-dark text-white border-secondary shadow-none custom-placeholder"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="warning" type="submit" className="fw-bold text-dark px-4 py-2 mt-4">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default FormControlComponent;