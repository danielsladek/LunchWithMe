/* global FB */

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';
import graph from 'fb-react-sdk';

export class LunchBuddyIcon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: null
    }
  }

  componentDidMount() {
  
    let url;
    const { facebookId } = this.props.lunchBuddy;
    fetch('https://graph.facebook.com/v2.11/' + facebookId + '/picture')
    .then(response => {
        this.state.url = response.url
    });
  }

  render() {

    const { name, surname, icon, id, facebookId } = this.props.lunchBuddy;

    console.log('>>> url state', this.state.url)

    return (

      <div className="lunchBuddyIcon">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif" />
      </div>
    );
  }
}
