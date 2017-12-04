import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router';
import { FBLogin } from '../components/FBLogin/FBLogin';
import mockImg from '../lwm-mock.png';

class Landing extends Component {
  render() {

    return (
      <div className="hero">
        <Container>

          <h1 className="hero-title">Lunch with me</h1>
            <div className="title-text">
              Meet and lunch with your friends and colleagues!
            </div>
            <br/>
            <FBLogin />
            <img className="hero-img" width="700px" src={mockImg} alt="Mock image"></img>
        </Container>
      </div>
    );
  }
}

export default Landing;
