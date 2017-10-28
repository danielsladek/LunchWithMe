import React, { Component } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem  } from 'reactstrap';

class Buddies extends Component {
  render() {
    return (
      <Container className="buddies">
        <Row>
          <Col>Requests</Col>
        </Row>
        <br></br>
        <Row>
          <Col><h3>Matěj Bouša</h3></Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary">Accept</Button>{' '}
            <Button color="secondary">Decline</Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col><h3>Tomáš Fenyk</h3></Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary">Accept</Button>{' '}
            <Button color="secondary">Decline</Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            My lunch buddies (3)
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem tag="a" href="#">
                Jaroslav Hloušek
                <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </ListGroupItem>
              <ListGroupItem tag="a" href="#">
                Adam Hemžal
                <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </ListGroupItem>
              <ListGroupItem tag="a" href="#">
                Dominik Meduna
                <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Buddies;
