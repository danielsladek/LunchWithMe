import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';

export class LunchBuddyIcon extends Component {
  render() {
    const { name, surname, icon, id } = this.props.lunchBuddy;

    return (
      <div className="lunchBuddyIcon">
        <Link to={"/user/" + id } ><img src={icon} alt={name + " " + surname} /></Link>
      </div>
    );
  }
}
