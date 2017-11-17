import React, { Component } from 'react';
import { EventLunchBuddiesList } from '../EventLunchBuddiesList';
import { Row, Col, Button, Form } from 'reactstrap';
import { EventComments } from '../EventComments';
import { AttendToEventButton } from '../AttendToEventButton';
import { connect } from 'react-redux';
import { changeEventAttendance, fetchEventPanelToStore } from "./Actions";
import { getEventById, getEventFromStore } from "./Reducer";

export class EventPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn(e) {
    e.preventDefault();
    this.props.changeEventAttendance(this.props.event);
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
            {user.name}
            {user.surname}
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
          <AttendToEventButton onClick={this.toggleBtn} organizator={user} activeBtn={willAttend} />
          {displayComments && <EventComments comments={comments}/>}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  /* Informace o eventu se načtou ze storu eventFeed nebo
     (pokud existuje) je načtena ze storu samotného eventPanelu.
   */
  return {event: getEventFromStore(storeState, props.eventId)};
};

export const EventPanel = connect(
  mapStateToProps,
  {
    changeEventAttendance,
    fetchEventPanelToStore,
  },
)(EventPanelContainer);