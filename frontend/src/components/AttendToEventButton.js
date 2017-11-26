import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { getUserInfo } from './FBLogin/Reducer';

export class AttendToEventButtonContainer extends Component {

  render() {
    const { organizator, onClick, activeBtn, userInfo } = this.props,
            buttonTexts = {
              others: {
                going: "Going with " + organizator.name,
                attend: "Lunch with " + organizator.name,
              },
              own: {
                going: "Will attend",
                attend: "Join event",
              }
            };

    return (
      <Form name="attendToEvent">
        <Button onClick={onClick}  type="submit" color={activeBtn ? "success" : "primary" } size="lg">
          {activeBtn ?
            (userInfo.userId == organizator.id) ?
              buttonTexts.own.going : buttonTexts.others.going
            :
            userInfo.userId == organizator.id ?
              buttonTexts.own.attend : buttonTexts.others.attend
          }
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  return {userInfo: getUserInfo(storeState)};
};

export const AttendToEventButton = connect(
  mapStateToProps,
  {},
)(AttendToEventButtonContainer);
