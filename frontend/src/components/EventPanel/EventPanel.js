import React, { Component } from 'react';
import { EventLunchBuddiesList } from '../EventLunchBuddiesList';
import { Row, Col } from 'reactstrap';
import { EventComments } from '../EventComments';
import { AttendToEventButton } from '../AttendToEventButton';
import { connect } from 'react-redux';
import { switchEventAttendance } from "./Actions";
import { getEventById } from "../../pages/EventFeedPage/Reducer";
import { getUserInfo } from "../FBLogin/Reducer";
import { LunchBuddyIcon } from "../LunchBuddyIcon";
import { CancelEventButton } from "../CancelEventButton";
import { Redirect, Route, browserHistory } from "react-router";
import Moment from 'moment';

export class EventPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.changeAttendanceButtonClick = this.changeAttendanceButtonClick.bind(this);
    this.cancelEventButtonClick = this.cancelEventButtonClick.bind(this);
    this.getWillAttend = this.getWillAttend.bind(this);
  }

  cancelEventButtonClick(e) {
    e.preventDefault();

    const { event } = this.props,
            currentWillAttend = this.getWillAttend();
  };

  changeAttendanceButtonClick(e) {
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
            attendantId = attendant.Attendance.UserId;

      if (attendantId === userId && typeof eventAttendance !== 'undefined' && eventAttendance !== null) {
        willAttend = eventAttendance;
      } else {
        willAttend = false;
      }
    });

    return willAttend;
  };

  handleClick(id) {
    //return (<Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}/>);
    browserHistory.push('/event/' + this.props.event.id, { event: this.props.event })
    
  }

  render() {
    Moment.locale('cs');

    const {
      id,
      maximumLunchBuddies,
      organizator,
      eventAttendees,
      comments,
      description,
      place,
    } = this.props.event,
      willAttend = this.getWillAttend(),
      { userInfo } = this.props;

    var displayComments = false,
        timeStart = Moment(this.props.event.timeStart).format('d. M. Y H:mm'),
        timeEnd = Moment(this.props.event.timeEnd).format('d. M. Y H:mm'),
        googleMapsLink = 'https://maps.google.com/?ll=' + place.coordsX + ',' + place.coordsY;

    if (typeof this.props.displayComments !== 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
      <Row className="eventPanel">
        <Col onClick={() => this.handleClick(id)}>
          <Row className="organizatorPanel">
            <Col>
              <LunchBuddyIcon lunchBuddy={organizator} />
              <div className="name">
                { organizator.id == userInfo.userId ?
                  "You"
                  :
                  organizator.name + " " +  organizator.surname
                }
              </div>
            </Col>
          </Row>
          <Row className="eventInfo">
            <Col>
              <h2 className="eventTitle">
                at <a href={googleMapsLink} target="_blank">{place.name}</a>
              </h2>
              <div className="date">
                {timeStart} - {timeEnd}
              </div>
              <div className="description">
                {description}
              </div>
            </Col>
          </Row>
          <EventLunchBuddiesList eventAttendees={eventAttendees} currentUser={userInfo} organizator={organizator} />
          <Row className="buttonPanel">
            <Col>
              <form name="eventActions">
                { organizator.id != userInfo.userId && <AttendToEventButton onClick={this.changeAttendanceButtonClick} organizator={organizator} activeBtn={willAttend} userInfo={userInfo} />}
                { organizator.id == userInfo.userId && <CancelEventButton onClick={this.cancelEventButtonClick} />}
              </form>
            </Col>
          </Row>
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