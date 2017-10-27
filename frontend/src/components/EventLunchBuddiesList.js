import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class EventLunchBuddiesList extends Component {
  render() {
    return (
      <div className="eventLunchBuddiesList">
        {this.props.eventAttendees.map((lunchBuddy, i) => (
          <Button color="success" key={lunchBuddy.id}>{lunchBuddy.name}</Button>
        ))}
      </div>
    );
  }
}
