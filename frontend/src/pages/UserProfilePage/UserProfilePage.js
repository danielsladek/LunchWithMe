import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import { UserEventsList } from '../../components/UserEventsList';
import { connect } from "react-redux";
import {  } from "./Actions";
import { } from "./Reducer";

export class UserProfilePageContainer extends Component {
  render() {
    // Sample user data object
    /* userDataObj = {
      name: "John",
      surname: "Doe",
      userId: 1,
      lunchBuddiesCount: 25,
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      events: [
        {
          eventId: 1,
          eventPlace: {
            name: "Tradice",
            location: "Anděl"
          },
          eventDate: "1.1.2001"
        },
        {
          eventId: 2,
          eventPlace: {
            name: "Tradice",
            location: "Anděl"
          },
          eventDate: "3.1.2001"
        }
      ]
    };*/

    const { name, surname, lunchBuddiesCount, description, events } = this.props.user;

    return (
      <Row className="eventsFeedPage">
        <Col md="8" sm="12">
          <Row>
            <Col>
              <h1>{name} {surname}</h1>
              <span>Lunch buddies: {lunchBuddiesCount}</span>
              <div className="description">
                {description}
              </div>
              <Form name="addBudy">
                <Button type="submit" color="primary">Add a buddy</Button>
              </Form>
            </Col>
          </Row>
          <UserEventsList userEvents={events} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  return {};
};

export const UserProfilePage = connect(
  mapStateToProps,
  {

  },
)(UserProfilePageContainer);
