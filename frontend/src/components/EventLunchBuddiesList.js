import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class EventLunchBuddiesList extends Component {
  render() {
    return (
      <div className="eventLunchBuddiesList">
        {this.props.eventAttendees.map((lunchBuddy, i) => (
          <a className="budy-btn" color="secondary" size="sm" key={lunchBuddy.id}>{lunchBuddy.name}</a>
        ))}
      </div>
    );
  }
}
