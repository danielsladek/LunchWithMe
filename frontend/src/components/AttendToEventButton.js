import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export class AttendToEventButton extends Component {
  render() {
    const { organizator, onClick, activeBtn } = this.props;

    return (
      <Form name="attendToEvent">
        {activeBtn
          ?
          <Button onClick={onClick}  type="submit" color="success" size="lg">Going with {organizator.name}</Button>
          :
          <Button onClick={onClick} type="submit" color="primary" size="lg">Lunch with {organizator.name}</Button>
        }
      </Form>
    );
  }
}
