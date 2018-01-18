import React, { Component } from 'react';
import { EventLunchBuddiesList } from '../EventLunchBuddiesList';
import { Row, Col } from 'reactstrap';
import { EventComments } from '../EventComments';
import { AttendToEventButton } from '../AttendToEventButton';
import { connect } from 'react-redux';
import { switchEventAttendance, deleteEvent } from "./Actions";
import { getEventById } from "../../pages/EventFeedPage/Reducer";
import { getUserInfo } from "../FBLogin/Reducer";
import { LunchBuddyIcon } from "../LunchBuddyIcon";
import { CancelEventButton } from "../CancelEventButton";
import { EditEventButton } from "../EditEventButton";
import { Redirect, Route, browserHistory } from "react-router";
import Moment from 'moment';
import { format } from "date-fns";

export class EventPanelContainer extends Component {
  constructor(props) {
    super(props);

    this.changeAttendanceButtonClick = this.changeAttendanceButtonClick.bind(this);
    this.cancelEventButtonClick = this.cancelEventButtonClick.bind(this);
    this.editEventButtonClick = this.editEventButtonClick.bind(this);
    this.getWillAttend = this.getWillAttend.bind(this);
  }

  cancelEventButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const { eventId } = this.props;

    this.props.deleteEvent(eventId);
  };

  editEventButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const { eventId } = this.props;

    browserHistory.push('/event/' + eventId + '/edit');
  };

  changeAttendanceButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
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

  handleClick(id, e) {
    //return (<Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}/>);
    browserHistory.push('/event/' + this.props.event.id, { event: this.props.event })
    console.log(e);

  }

   handleStopPropagation = function(e) {
    e.stopPropagation();
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
      { userInfo,divide } = this.props;

    var displayComments = false,
        timeStart = Moment(this.props.event.timeStart).format('d. M. Y H:mm'),
        timeEnd = Moment(this.props.event.timeEnd).format('d. M. Y H:mm'),
        googleMapsLink = 'https://maps.google.com/?ll=' + place.lat + ',' + place.lng;

    if (typeof this.props.displayComments !== 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    let attendeesHelper;
    if  (eventAttendees.filter((val) => val.Attendance.willAttend ).length > 0 ) {
          attendeesHelper = <div><div>with</div><div className="empty">No lunch budies yet</div></div>;

     }
     else {
      attendeesHelper = <div className="empty-attendees">
        with
        <div className="empty">No lunch budies yet</div>
      </div>
     }


    return (


      <Col md="3"
          onClick={(e) => this.handleClick(id, e)}
          >


          <div className="feed-event-box">
            <div className="organizatorPanel">

                <LunchBuddyIcon lunchBuddy={organizator} onClick={this.handleStopPropagation} />
                <div className="name">
                  { organizator.id == userInfo.userId ?
                    "You are going to"
                    :
                    organizator.name + " " + " is going to "
                  }
                </div>

            </div>
            <div className="eventInfo">

                <h2 className="eventTitle">
                  <a href={googleMapsLink} target="_blank" onClick={ (e) => this.handleStopPropagation(e) }>{place.name}</a>
                </h2>
                <div className="date">
                  at {format(timeStart, "H:mm")}
                  {/* {timeStart} - {timeEnd} */}
                </div>
                {/* <div className="description">
                  {description}
                </div> */}

            </div>

              <div className="feed-event-buddies">
                {attendeesHelper}
                 <EventLunchBuddiesList eventAttendees={eventAttendees} currentUser={userInfo} organizator={organizator} onClick={ (e) => this.handleStopPropagation(e) } />

              </div>


            <div className="buttonPanel">

                <form name="eventActions">
                  { organizator.id != userInfo.userId && <AttendToEventButton onClick={this.changeAttendanceButtonClick} organizator={organizator} activeBtn={willAttend} userInfo={userInfo} />}
                  { organizator.id == userInfo.userId && <CancelEventButton onClick={this.cancelEventButtonClick} />}
                  { organizator.id == userInfo.userId && <EditEventButton onClick={(e) => {this.editEventButtonClick; this.handleStopPropagation(e);} } />}
                </form>

            </div>
          </div>
        </Col>

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
    deleteEvent,
  },
)(EventPanelContainer);
