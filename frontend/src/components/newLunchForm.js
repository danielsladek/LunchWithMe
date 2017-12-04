import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import Datetime from "react-datetime";
import Api from "../Api";
import { connect } from "react-redux";
import { Redirect, Route, browserHistory } from "react-router";
import { getUserInfo } from "./FBLogin/Reducer";
import { isMoment } from "moment";

export class NewLunchFormContainer extends React.Component {
    constructor(props) {
        super(props);

        const { userInfo } = this.props;

        this.state = {
            name: "",
            timeStart: "",
            description: "",
            organizatorId: userInfo.userId,
            placeName: "",
            lat: "",
            lng: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);

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
        } = this.state;

        const api = new Api();

        api.createNewEvent({
            description: description,
            placeName: placeName,
            timeStart: timeStart, //timeStart: '2017-12-14 14:30:00',
            organizatorId: organizatorId,
            lat: 50.082685,
            lng: 14.440303
        }).then(() => {
           
            browserHistory.push('/feed');
        });

        // 
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Create new lunch</h1>
                <FormGroup>
                    <Label for="placeName">Place name:</Label>
                    <Input
                        name="placeName"
                        id="placeName"
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
                    Create a new lunch
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

export const NewLunchForm = connect(mapStateToProps, {})(NewLunchFormContainer);
