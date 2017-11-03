import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <Container className="landing">
        <Row>
          <Col><h1>Lunch with me</h1></Col>
        </Row>
        <Row>
          <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
            lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
            pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
            nunc eget.</Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Button color="primary">Create a new account</Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Button color="secondary">Login</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
