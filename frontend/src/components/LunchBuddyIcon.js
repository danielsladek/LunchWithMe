import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class LunchBuddyIcon extends Component {
  render() {
    return (
      <div className="lunchBuddyIcon">
        <img src={this.props.href} />
      </div>
    );
  }
}
