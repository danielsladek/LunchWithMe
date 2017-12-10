import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import Datetime from "react-datetime";
import Api from "../../Api";
import { connect } from "react-redux";
import { Redirect, Route, browserHistory } from "react-router";
import { getUserInfo } from "../FBLogin/Reducer";
import { isMoment } from "moment";
import { updateEvent } from "./Actions";

export class LunchFormContainer extends React.Component {
    constructor(props) {
        super(props);

        const { userInfo } = props;

        var statePrepare = {
            timeStart: "",
            description: "",
            placeName: "",
            organizatorId: userInfo.userId,
            lat: "",
            lng: "",
        };

        if (props.editEvent != null) {
          const { timeStart, description, place } = props.editEvent;

          statePrepare.timeStart = timeStart;
          statePrepare.description = description;
          statePrepare.placeName = place.name;
          statePrepare.lat = place.lat;
          statePrepare.lng = place.lng;
        }

        this.state = statePrepare;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (isMoment(event)) {
            this.setState({
                timeStart: event.format()
            });
        } else {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const {
          placeName,
          description,
          timeStart,
          organizatorId,
          lat,
          lng
        } = this.state,
          api = new Api(),
          eventData = {
            description: description,
            placeName: placeName,
            timeStart: timeStart, //timeStart: '2017-12-14 14:30:00',
            organizatorId: organizatorId,
            lat: 50.082685,
            lng: 14.440303
          };

        if (e.target.getAttribute('name') == 'saveChange') { // Update event
          api.updateEvent({
            eventId: this.props.editEvent.id,
            eventData: eventData,
          });
        } else { // Create new event
          api.createNewEvent(eventData);
        }

        this.props.updateEvent();
        browserHistory.push('/feed');
    }

    render() {
        console.log(this.props.editEvent);
        return (
            <Form onSubmit={this.handleSubmit} name={this.props.editEvent != null ?
              "saveChange"
              :
              "create"
            }>
                <h1>{this.props.editEvent != null ?
                  "Edit lunch"
                  :
                  "Create new lunch"
                }</h1>
                <FormGroup>
                    <Label for="placeName">Place name:</Label>
                    <Input
                        name="placeName"
                        id=""
                        type="text"
                        value={this.state.placeName}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="timeStart">Date and time:</Label>
                            <Datetime
                                id="timeStart"
                                name="timeStart"
                                value={this.state.timeStart}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input
                        name="description"
                        type="textarea"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button color="primary" type="submit">
                  {this.props.editEvent != null ?
                    "Save changes"
                    :
                    "Create a new lunch"
                  }
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = (storeState, props) => {
    return {
        userInfo: getUserInfo(storeState)
    };
};

export const LunchForm = connect(mapStateToProps, {
  updateEvent,
})(LunchFormContainer);
