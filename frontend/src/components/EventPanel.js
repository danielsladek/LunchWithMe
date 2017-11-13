import React, {Component} from 'react';
import {EventLunchBuddiesList} from './EventLunchBuddiesList';
import {Row, Col, Button, Form} from 'reactstrap';
import {EventComments} from './EventComments';
import {AttendToEventButton} from './AttendToEventButton/AttendToEventButton';

export class EventPanel extends Component {
  constructor(props) {
    super(props);
    this.toggleBtn = this
      .toggleBtn
      .bind(this);
    this.state = {
      activeBtn: false
    };
  }
  toggleBtn(e) {
    e.preventDefault();
    const currentState = this.state.activeBtn;
    this.setState({
      activeBtn: !currentState
    });
  };

  render() {
    const {
      maximumLunchBuddies,
      eventName,
      user,
      eventDate,
      eventAttendees,
      comments,
      eventDescription,
      willAttend,
      eventId
    } = this.props.event;
    var displayComments = false;

    if (typeof this.props.displayComments !== 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
      <Row className="eventPanel">
        <Col>
          <div className="name">
            {user.name}
            {user.surname}
          </div>
          <div className="date">
            {eventDate}
          </div>
          <br/>

          <h1 className="eventName">{eventName}</h1>
          <span>Lunch buddies (max. {maximumLunchBuddies}):</span>
          <EventLunchBuddiesList eventAttendees={eventAttendees}/>
          <div className="description">
            {eventDescription}
          </div>
          <AttendToEventButton eventId={eventId} willAttend={willAttend} organizator={user} />
          {displayComments && <EventComments comments={comments}/>}
        </Col>
      </Row>
    );
  }
}
