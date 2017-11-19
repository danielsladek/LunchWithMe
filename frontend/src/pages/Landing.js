import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router';
import { FBLogin } from '../components/FBLogin/FBLogin';

class Landing extends Component {
  render() {

    return (
      <div className="hero">
        <Container>
          <Row>
            <Col><h1 className="hero-title">Lunch with me</h1></Col>
          </Row>
          <Row>
            <div className="title-text">
              Meet and lunch with your friends and colleagues!
            </div>
          </Row>
          <Row>
            <Col>
              <FBLogin />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
