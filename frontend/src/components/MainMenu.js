import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, NavItem } from 'reactstrap';

export class MainMenu extends Component {
  render() {
    return (
      <Nav className="mainMenu">
        <ul>
          <NavItem><Link to="/feed"><span className="feed icon"></span></Link></NavItem>
          <NavItem><Link to="/friends"><span className="friends icon"></span></Link></NavItem>
          <NavItem><Link to="/createEvent"><span className="createEvent icon"></span></Link></NavItem>
          <NavItem><Link to="/notifications"><span className="notifications icon"></span></Link></NavItem>
          <NavItem><Link to="/other"><span className="other icon"></span></Link></NavItem>
        </ul>
      </Nav>
    );
  }
}
