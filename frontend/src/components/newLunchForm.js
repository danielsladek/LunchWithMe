import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


export class NewLunchForm extends React.Component {

    render() {

        return (
            <Form className="new-lunch-form">
              <h1>Create a new lunch event</h1>
                <FormGroup>
                    <Label for="name">Place:</Label>
                    <Input id="name" type="text" />
                </FormGroup>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Label for="date">Date:</Label>
                            <Input id="date" type="text" />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Label for="time">Time:</Label>
                            <Input id="time" type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="invitations">Invitations:</Label>
                    <Input id="invitations" type="text"/>
                </FormGroup>
                <Link to="feed2">
                  <Button color="primary" type="submit">Create a new lunch</Button>
                </Link>
            </Form>
        )

    }

}
