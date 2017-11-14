import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { changeEventAttendance } from './Actions';
import { connect } from 'react-redux';
import { getEventById } from './Reducer';

export class AttendToEventButtonContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn(e) {
    e.preventDefault();
    this.props.changeEventAttendance(this.props.event.id); // Funkce vložená přes connect()
  };

  render() {
    const { user, willAttend } = this.props.event;

    return (
      <Form name="attendToEvent">
        {willAttend
          ?
          <Button onClick={this.toggleBtn}  type="submit" color="success" size="lg">Going with {user.name}</Button>
          :
          <Button onClick={this.toggleBtn} type="submit" color="primary" size="lg">Lunch with {user.name}</Button>
        }
      </Form>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  return {event: getEventById(storeState, props.eventId)};
};

export const AttendToEventButton = connect(
  mapStateToProps,
  {
    changeEventAttendance, // Funkce se vloží pro Redux a do komponenty
  },
)(AttendToEventButtonContainer);
