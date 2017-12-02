import React, { Component } from 'react';
import { Row, Col, Form, Button, Container } from 'reactstrap';
import { UserEventsList } from '../../components/UserEventsList';
import Api from '../../Api';
import { LunchBuddyIcon } from '../../components/LunchBuddyIcon';

export class UserProfilePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userData: { name: "", surname: "" , email: "", icon: "", organizes: [] },
    };
  }

  componentDidMount() {
    /* Get user data without need to fetch them to the store */
    const api = new Api();
    const userData = api.getUserById(this.props.params.userId).then(res => {
      this.setState({ userData: res.user });
    });
  }

  render() {
    const { name, surname, icon, organizes } = this.state.userData;

    return (
      <Row className="eventsFeedPage">
        <Col md="8" sm="12">
          <Row>
            <Col>
              <LunchBuddyIcon lunchBuddy={this.state.userData} />
              <h1>{name} {surname}</h1>
              <h3>{name}'s events</h3>
              <UserEventsList userEvents={organizes} />
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }
}
