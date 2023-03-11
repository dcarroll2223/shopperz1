import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function OrderPlacedScreen() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/');
  };
  return (
    <div>
      <section className="p-3">
        <Helmet>
          <title>Order 37rgd56b</title>
        </Helmet>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md>
              <img
                src="images/shipping.jpg"
                className="img-fluid w-100"
                alt="shipping"
              />
            </Col>
            <Col md className="p-5">
              <h2>Order complete</h2>
              <p className="lead">Thank you for your order!</p>
              <p>Order 37rgd56b</p>
              <Button variant="light" className="mt-1" onClick={submitHandler}>
                <i className="bi bi-chevron-right"></i>
                Continue Shopping
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-4 mb-4 bg-dark text-light">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md className="p-5">
              <h2>This Weeks Deals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                dolorem quo nisi porro voluptatem dolor.
              </p>
              <Button variant="light" className="mt-1" onClick={submitHandler}>
                <i className="bi bi-chevron-right"></i>
                Go Shopping
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
