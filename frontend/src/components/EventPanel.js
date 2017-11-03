import React, { Component } from 'react';
import { EventLunchBuddiesList } from './EventLunchBuddiesList';
import { Row, Col, Button, Form } from 'reactstrap';
import { EventComments } from './EventComments';

export class EventPanel extends Component {
  constructor(props) {
      super(props);
      this.toggleBtn= this.toggleBtn.bind(this);
      this.state = {
          activeBtn: false,
      };
  }
  toggleBtn(e) {
      e.preventDefault();
      const currentState = this.state.activeBtn;
      this.setState({ activeBtn: !currentState });
  };


  render() {
    const { maximumLunchBuddies, eventName, eventCreator, eventDate, eventAttendees, comments, eventDescription } = this.props.event;
    var displayComments = false;

    if (typeof this.props.displayComments != 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
      <Row className="eventPanel">
        <Col>
          <div className="name">
            {eventCreator.name} {eventCreator.surname}
          </div>
          <div className="date">
            {eventDate}
          </div>
          <br/>

          <h1 className="eventName">{eventName}</h1>
          <span>Lunch buddies (max. {maximumLunchBuddies}):</span>
          <EventLunchBuddiesList eventAttendees={eventAttendees} />
          <div className="description">
            {eventDescription}
          </div>
          <Form name="addMeToEvent">
            {this.state.activeBtn
              ?
              <Button onClick={this.toggleBtn}  type="submit" color="success" size="lg">Going with {eventCreator.name}</Button>
              :
              <Button onClick={this.toggleBtn} type="submit" color="primary" size="lg">Lunch with {eventCreator.name}</Button>}

          </Form>
          { displayComments && <EventComments comments={comments} /> }
        </Col>
      </Row>
    );
  }
}
