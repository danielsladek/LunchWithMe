import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { EventPanel } from "./EventPanel/EventPanel";

export class UserEventsList extends Component {
  render() {
    const { userEvents } = this.props;

    return (
      <Row className="userEventsList">
        <Col>
          {userEvents.length ?
            userEvents.map((event, i) => (
              <EventPanel eventId={event.id} event={event} key={event.id} />
            ))
            :
            "User organizes no events."
          }
        </Col>
      </Row>
    );
  }
}
