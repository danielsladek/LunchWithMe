import React, { Component } from "react";
import { Button } from "reactstrap";

export class AttendToEventButton extends Component {
  render() {
    const { organizator, onClick, activeBtn, userInfo } = this.props,
      buttonTexts = {
        others: {
          going: "Going with " + organizator.name,
          attend: "Lunch with " + organizator.name
        },
        own: {
          going: "Will attend",
          attend: "Join event"
        }
      };

    return (
      <Button onClick={onClick} type="button" color={activeBtn ? "success" : "primary"} size="sm">
        {activeBtn
          ? userInfo.userId === organizator.id ? buttonTexts.own.going : buttonTexts.others.going
          : userInfo.userId === organizator.id ? buttonTexts.own.attend : buttonTexts.others.attend}
      </Button>
    );
  }
}
