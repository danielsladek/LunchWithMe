import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router'

class Landing extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="hero">
        <Container>
          <Row>
            <Col><h1 className="hero-title">Lunch with me</h1></Col>
          </Row>
          <Row>
            <div className="title-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
              lacus accumsan et viverra justo commodo. Proin sodales pulvinar
              tempor. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
              pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
              nunc eget.
              </div>
          </Row>
          <br></br><br></br><br></br>
          <Row>
            <Col>
              <Link to="/reg">
                <Button color="success" size="lg">Create a new account</Button>
              </Link>
              <Button className="space-left" size="lg" color="secondary">Login</Button>
            </Col>
          </Row>

          {children}
        </Container>
      </div>
    );
  }
}

export default Landing;
