import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { LunchBuddyIcon } from './LunchBuddyIcon';

export class EventLunchBuddiesList extends Component {
  render() {
    const { currentUser, eventAttendees } = this.props;

    return (
      /* Only attendees with willAttend = true are displayed in this list */
      <div className="eventLunchBuddiesList">

        {eventAttendees.map(function(lunchBuddy, i) {
          if (lunchBuddy.Attendance.willAttend) {
            return <Button className="budy-btn" color="secondary" size="sm" key={lunchBuddy.id}>
                     <LunchBuddyIcon href={lunchBuddy.icon} />
                     <span className="buddyName">
                       {lunchBuddy.id == currentUser.userId ?
                         "You"
                         :
                         lunchBuddy.name
                       }
                     </span>
                   </Button>
          }
        })}
      </div>
    );
  }
}
