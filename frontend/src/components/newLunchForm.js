import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';


export class NewLunchForm extends React.Component {

    render() {

        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input id="name" type="text" />
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="date">Date:</Label>
                            <Input id="date" type="text" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="time">Time:</Label>
                            <Input id="time" type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input type="textarea" id="description" />
                </FormGroup>
                <FormGroup>
                    <Label for="lunchevent">Lunch event type:</Label>
                    <Input type="select" id="lunchevent">
                        <option>Only for invited</option>
                        <option>Only for my friends</option>
                        <option>Public</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="invitations">Invitations:</Label>
                    <Input id="invitations" type="text"/>
                </FormGroup>
                <Button color="primary" type="submit">Create a new lunch</Button>
            </Form>
        )

    }

}