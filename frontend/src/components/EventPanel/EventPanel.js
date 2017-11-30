import React, { Component } from 'react';
import { EventLunchBuddiesList } from '../EventLunchBuddiesList';
import { Row, Col } from 'reactstrap';
import { EventComments } from '../EventComments';
import { AttendToEventButton } from '../AttendToEventButton';
import { connect } from 'react-redux';
import { switchEventAttendance } from "./Actions";
import { getEventById } from "../../pages/EventFeedPage/Reducer";
import { getUserInfo } from "../FBLogin/Reducer";

export class EventPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleBtn = this.toggleBtn.bind(this);
    this.getWillAttend = this.getWillAttend.bind(this);
  }

  toggleBtn(e) {
    e.preventDefault();

    const { event } = this.props,
            currentWillAttend = this.getWillAttend();

    var newWillAttend = false;

    if (currentWillAttend) {
      newWillAttend = false;
    } else { // Watch out for null value
      newWillAttend = true;
    }

    this.props.switchEventAttendance({event: event, willAttend: newWillAttend});
  };

  /* Check if user belongs to attendants and will attend the event */
  getWillAttend() {
    const { eventAttendees } = this.props.event,
          { userId } = this.props.userInfo;

    var willAttend = false;

    eventAttendees.find((attendant) => {
      const eventAttendance = attendant.Attendance.willAttend,
            attendantId = attendant.Attendance.userId;

      if (attendantId === userId && typeof eventAttendance !== 'undefined' && eventAttendance !== null) {
        willAttend = eventAttendance;
      } else {
        willAttend = false;
      }
    });

    return willAttend;
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
    } = this.props.event,
      willAttend = this.getWillAttend(),
      { userInfo } = this.props;

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
          <EventLunchBuddiesList eventAttendees={eventAttendees} currentUser={userInfo} />
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
  return {
    event: getEventById(storeState, props.eventId),
    userInfo: getUserInfo(storeState),
  };
};

export const EventPanel = connect(
  mapStateToProps,
  {
    switchEventAttendance,
  },
)(EventPanelContainer);
