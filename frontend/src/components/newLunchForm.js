import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';


export class NewLunchForm extends React.Component 
{
    constructor(props) {

        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            description: '',
            lunchevent: '',
            invitations: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        console.log('-----Values', this.state);
        event.preventDefault();
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="date">Date:</Label>
                            <Input name="date" id="date" type="text" value={this.state.date} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="time">Time:</Label>
                            <Input name="time" id="time" type="text" value={this.state.time} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input name="description" type="textarea" id="description" value={this.state.description} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lunchevent">Lunch event type:</Label>
                    <Input name="lunchevent" type="select" id="lunchevent" value={this.state.lunchevent} onChange={this.handleChange} >
                        <option>Only for invited</option>
                        <option>Only for my friends</option>
                        <option>Public</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="invitations">Invitations:</Label>
                    <Input name="invitations" id="invitations" type="text" value={this.state.invitations} onChange={this.handleChange} />
                </FormGroup>
                <Button color="primary" type="submit">Create a new lunch</Button>
            </Form>
        )

    }

}