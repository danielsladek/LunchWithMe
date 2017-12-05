import React, { Component } from 'react';
import { Link } from 'react-router';
import myLogo from '../lwm-logo.png';
import { LunchBuddyIcon } from "./LunchBuddyIcon";
import { Row, Ul, Li, Col, Form, Button, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, DropdownMenu, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';

export class TopMenu extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { comments, userData } = this.props;

    return (
        <Navbar color="red" dark expand="md" className="topMenu">
          <NavbarBrand href="/"><img width="150px" src={myLogo} alt="Logo"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/feed" className="nav-link">Event Feed</Link>
                </NavItem>
                <NavItem>
                  <Link to="/addEvent" className="nav-link add">Add event</Link>
                </NavItem>
                <div className="top-nav-user-icon">
                  <LunchBuddyIcon lunchBuddy={userData} link={false} />
                </div>
                <div className="top-nav-user-name">{userData.name}</div>
                <NavItem>
                  <Link to="/logout" className="nav-link">Logout</Link>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
