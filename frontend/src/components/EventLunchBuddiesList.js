import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { LunchBuddyIcon } from './LunchBuddyIcon';
import { Redirect, Link } from 'react-router';

export class EventLunchBuddiesList extends Component {

  render() {
    const { currentUser, eventAttendees } = this.props,
            userButtonClick = this.userButtonClick;

    return (
      /* Only attendees with willAttend = true are displayed in this list */
      <div className="eventLunchBuddiesList">

        {eventAttendees.map(function(lunchBuddy, i) {
          if (lunchBuddy.Attendance.willAttend) {
            return <Button type="button" className="budy-btn" color="secondary" size="sm" key={lunchBuddy.id}>
                    <Link to={"/user/" + lunchBuddy.id } >
                     <LunchBuddyIcon href={lunchBuddy.icon} />
                     <span className="buddyName">
                       {lunchBuddy.id == currentUser.userId ?
                         "You"
                         :
                         lunchBuddy.name
                       }
                     </span>
                    </Link>
                   </Button>
          }
        })}
      </div>
    );
  }
}
