import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import { UserEventsList } from '../components/UserEventsList';

export class UserProfilePage extends Component {
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

    const { user } = this.props;

    return (
      <Row className="eventsFeedPage">
        <Col md="8" sm="12">
          <Row>
            <Col>
              <h1>{user.name} {user.surname}</h1>
              <span>Lunch buddies: {user.lunchBuddiesCount}</span>
              <div className="description">
                {user.description}
              </div>
              <Form name="addBudy">
                <Button type="submit" color="primary">Add a buddy</Button>
              </Form>
            </Col>
          </Row>
          <UserEventsList userEvents={user.events} />
        </Col>
      </Row>
    );
  }
}
