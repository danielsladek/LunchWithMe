import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Notifications extends Component {
  render() {
    return (
      <Container className="notifications">
        <Row>
          <Col className="notification" xs="auto"><b>Jaroslav Hloušek just joined</b> </Col>
          <Col className="text-muted">Lunch with me at Kozlovna, Holešovice?</Col>
        </Row>
        <Row>
          <Col className="notification" xs="auto"><b>Dominik Meduna just commented on</b> </Col>
          <Col className="text-muted">Lunch with me at Lighthouse, Holešovice?</Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default Notifications;
