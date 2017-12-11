import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';

export class LunchBuddyIcon extends Component {
  render() {
    const { name, surname, icon, id } = this.props.lunchBuddy,
            image = <img src={icon} alt={name + " " + surname} />;

    return (
      <div className="lunchBuddyIcon">
        {typeof this.props.link != 'undefined' && this.props.link === false ?
          image
          :
          <Link to={"/user/" + id }  onClick={this.props.onClick}>
            {image}
          </Link>
        }
      </div>
    );
  }
}
