import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class UserEventsList extends Component {
  render() {
    const { userEvents } = this.props;

    return (
      <Row className="userEventsList">
        <Col>
          {userEvents.map((event, i) => (
            <Row className="event" key={event.eventId}>
              <Col>
                <h3>Lunch with me at {event.eventPlace.name}, {event.eventPlace.location}</h3>
                <span className="time">{event.eventDate}</span>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    );
  }
}
