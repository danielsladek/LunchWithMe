import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { changeEventAttendance } from './Actions';
import { connect } from 'react-redux';
import { getEventById } from './Reducer';

export class AttendToEventButtonContainer extends Component {
  constructor(props) {
      super(props);
      this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn(e) {
    e.preventDefault();
    changeEventAttendance(this.props.id);
  };

  render() {
    const { organizator, willAttend } = this.props;

    return (
      <Form name="attendToEvent">
        {willAttend
          ?
          <Button onClick={this.toggleBtn}  type="submit" color="success" size="lg">Going with {organizator.name}</Button>
          :
          <Button onClick={this.toggleBtn} type="submit" color="primary" size="lg">Lunch with {organizator.name}</Button>
        }
      </Form>
    );
  }
}

const mapStateToProps = (storeState) => {
  // State konkrétního eventu
};

export const mapDispatchToProps = (dispatch) => {
  // Upravený willAttend parametr statu konkrétního eventu
};

export const AttendToEventButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AttendToEventButtonContainer);
