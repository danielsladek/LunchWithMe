import React, { Component } from 'react';
import { EventLunchBuddiesList } from '../EventLunchBuddiesList';
import { Row, Col, Button, Form } from 'reactstrap';
import { EventComments } from '../EventComments';
import { AttendToEventButton } from '../AttendToEventButton';
import { connect } from 'react-redux';
import { switchEventAttendance, fetchEventPanelToStore } from "./Actions";
import { getEventById } from "../../pages/EventFeedPage/Reducer";

export class EventPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn(e) {
    e.preventDefault();

    const { id, willAttend } = this.props.event;
    this.props.switchEventAttendance({id, willAttend});
  };

  render() {
    const {
      maximumLunchBuddies,
      eventName,
      organizator,
      eventDate,
      eventAttendees,
      comments,
      eventDescription,
      willAttend,
      id
    } = this.props.event;
    var displayComments = false;

    if (typeof this.props.displayComments !== 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
      <Row className="eventPanel">
        <Col>
          <div className="name">
            {organizator.name}
            {organizator.surname}
          </div>
          <div className="date">
            {eventDate}
          </div>

          <h1 className="eventName">{eventName}</h1>
          <span>Lunch buddies (max. {maximumLunchBuddies}):</span>
          <EventLunchBuddiesList eventAttendees={eventAttendees}/>
          <div className="description">
            {eventDescription}
          </div>
          <AttendToEventButton onClick={this.toggleBtn} organizator={organizator} activeBtn={willAttend} />
          {displayComments && <EventComments comments={comments}/>}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  return {event: getEventById(storeState, props.eventId)};
};

export const EventPanel = connect(
  mapStateToProps,
  {
    switchEventAttendance,
  },
)(EventPanelContainer);
