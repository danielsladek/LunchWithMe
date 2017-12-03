/* global FB */

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';

export class LunchBuddyIcon extends Component {

  render() {

    const { name, surname, icon, id, facebookId } = this.props.lunchBuddy;

    FB.api(
      '/'+ facebookId +'/picture',
      'GET',
      {
        'height': 100,
        'width': 100
      },
      function(response) {
        console.log( 'response' );
      }
    );


    return (
      <div className="lunchBuddyIcon">
        
      </div>
    );
  }
}
