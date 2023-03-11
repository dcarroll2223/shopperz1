import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function AboutScreen() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/');
  };
  return (
    <div>
      <section className="p-2">
        <Helmet>
          <title>About</title>
        </Helmet>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md>
              <img
                src="images/about1.jpg"
                className="img-fluid w-100"
                alt="shopping"
              />
            </Col>
            <Col md>
              <h2>We're Here To Make You Look Good</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                temporibus dolores dicta soluta dolorem consequatur sequi
                laboriosam voluptate ipsa fugit voluptatibus tenetur mollitia
                eius, possimus nihil qui.
              </p>
              <Button
                variant="btn btn-outline-warning"
                className="mt-1"
                onClick={submitHandler}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-2">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md className="p-2">
              <h2>Savings Savings Savings</h2>
              <p>
                Free shipping on all orders over $100. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Neque, consequatur.
              </p>
              <Button
                variant="btn btn-outline-warning"
                className="mt-1"
                onClick={submitHandler}
              >
                <i className="bi bi-chevron-right"></i>
                Shop Now
              </Button>
            </Col>
            <Col md>
              <img src="images/about2.jpg" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
