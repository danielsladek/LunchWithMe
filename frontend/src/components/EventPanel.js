import React, { Component } from 'react';
import { EventLunchBuddiesList } from './EventLunchBuddiesList';
import { Row, Col, Button, Form } from 'reactstrap';
import { EventComments } from './EventComments';

export class EventPanel extends Component {
  render() {
    const { maximumLunchBuddies, eventName, eventCreator, eventDate, eventAttendees, comments, eventDescription } = this.props.event;
    var displayComments = false;

    if (typeof this.props.displayComments != 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
      <Row className="eventPanel">
        <Col>
          <div className="name">
            {eventCreator.name} {eventCreator.surname}
          </div>
          <div className="date">
            {eventDate}
          </div>
          <br/>

          <h1 className="eventName">{eventName}</h1>
          <span>Lunch buddies (max. {maximumLunchBuddies}):</span>
          <EventLunchBuddiesList eventAttendees={eventAttendees} />
          <div className="description">
            {eventDescription}
          </div>
          <Form name="addMeToEvent">
            <Button type="submit" color="primary" size="lg">Lunch with {eventCreator.name}</Button>
          </Form>
          { displayComments && <EventComments comments={comments} /> }
        </Col>
      </Row>
    );
  }
}
