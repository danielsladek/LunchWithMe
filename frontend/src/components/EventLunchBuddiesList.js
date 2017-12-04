import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { LunchBuddyIcon } from './LunchBuddyIcon';
import { Link } from 'react-router';
import { browserHistory } from "react-router";

export class EventLunchBuddiesList extends Component {

  constructor(props) {
    super(props);
    this.userButtonClick = this.userButtonClick.bind(this);
  }

  userButtonClick(e) {
    e.preventDefault();
    browserHistory.replace('/user/' + e.target.getAttribute('data-user-id'));
  }

  render() {
    const { currentUser, eventAttendees, organizator } = this.props,
            userButtonClick = this.userButtonClick;

    return (
      /* Only attendees with willAttend = true are displayed in this list */
      <div className="eventLunchBuddiesList">

        {eventAttendees.map(function(lunchBuddy, i) {
          if (lunchBuddy.Attendance.willAttend && lunchBuddy.id != organizator.id) {
            return <div className="budy-wrapper" onClick={userButtonClick} data-user-id={lunchBuddy.id} key={lunchBuddy.id}>
                  <Link to={"/user/" + lunchBuddy.id } >
                    <LunchBuddyIcon lunchBuddy={lunchBuddy} link={false} />
                    <span className="buddyName">
                       {lunchBuddy.id == currentUser.userId ?
                         "You"
                         :
                         lunchBuddy.name
                       }
                   </span>
                  </Link>
                 </div>
          }
        })}
      </div>
    );
  }
}
