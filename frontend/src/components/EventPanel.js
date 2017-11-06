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
          widgetEmpty: true
      };
  }
  toggleBtn(e) {
      e.preventDefault();
      const currentState = this.state.activeBtn;
      const currentStateWidget = this.state.widgetEmpty;
      this.setState({
        activeBtn: !currentState,
        widgetEmpty: !currentStateWidget,
       });
  };


  render() {
    const { maximumLunchBuddies, eventName, eventCreator, eventDate, eventAttendees, comments, eventDescription } = this.props.event;
    var displayComments = false;

    if (typeof this.props.displayComments != 'undefined' && this.props.displayComments === true) {
      displayComments = true;
    }

    return (
        <Col md="4" sm="12">
          <div className={"eventPanel " + this.state.activeBtn}>
            <div className="name">
              {eventCreator.name} {eventCreator.surname} <span>created</span>
            </div>
            <br/>

            <h3 className="eventName">{eventName}</h3>
            <div className="date">
              {eventDate}
            </div>
            <span>Buddies (max. {maximumLunchBuddies}):</span>
            <EventLunchBuddiesList eventAttendees={eventAttendees} />
          {/* <div className="description">
            {eventDescription}
          </div> */}
            <Form name="addMeToEvent">
              {this.state.activeBtn
                ?
                <Button onClick={this.toggleBtn}  type="submit" color="success" size="lg">Going with {eventCreator.name}</Button>
                :
                <Button onClick={this.toggleBtn} type="submit" color="primary" size="lg">Lunch with {eventCreator.name}</Button>}

            </Form>
            { displayComments && <EventComments comments={comments} /> }
          </div>
        </Col>

    );
  }
}
