import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

function HomeScreen() {
  return (
    <div>

      {/* HERO SECTION - Minimal Gradient */}
      <div
        className="py-5 text-center text-dark"
        style={{
          background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)"
        }}
      >
        <Container
  fluid
  className="py-5 text-center text-white d-flex flex-column justify-content-center align-items-center"
  style={{
    backgroundImage: "url('/images/cameras.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    position: 'relative'
  }}
>
  {/* Optional: Overlay for better readability */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent dark overlay
      zIndex: 1
    }}
  ></div>

  <div style={{ position: 'relative', zIndex: 2 }}>
    <h1 className="display-5 fw-bold">Welcome to Digi Cartell</h1>
    <p className="lead mt-3 w-75 mx-auto">
      Your trusted digital marketplace for affordable, high-quality products,
      and innovative services designed to make life easier.
    </p>
  </div>
</Container>
      </div>

      <Container className="my-5">

        {/* WHO WE ARE */}
        <Card
          className="mb-4 border-0 rounded-4 shadow-sm"
          style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}
        >
          <Card.Body className="text-center p-4">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              Digi Cartell is a startup business that sells second-hand digicams and cameras.
            </p>
          </Card.Body>
        </Card>

        {/* WHAT WE DO */}
        <Card
          className="mb-4 border-0 rounded-4 shadow-sm"
          style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}
        >
          <Card.Body className="text-center p-4">
            <h2 className="fw-bold mb-3">What We Do</h2>
            <p className="text-muted">
              We specialize in high-quality, second-hand digicams and cameras at affordable prices
Enjoy nationwide shipping and a payment-first basis for a hassle-free purchase experience.            </p>
          </Card.Body>
        </Card>

        {/* MISSION & VISION */}
        <Row className="g-4 mt-3">

          {/* Mission */}
          <Col md={6}>
            <Card
              className="h-100 border-0 rounded-4 shadow-sm"
              style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}
            >
              <Card.Body className="p-4 text-center">
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="text-muted">
                  To provide accessible and high-quality digicams and cameras that showcase creativity among images.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Vision */}
          <Col md={6}>
            <Card
              className="h-100 border-0 rounded-4 shadow-sm"
              style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}
            >
              <Card.Body className="p-4 text-center">
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="text-muted">
                  To become one of the most trusted digital marketplaces by consistently
                  delivering innovation, value, and customer satisfaction.
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default HomeScreen
