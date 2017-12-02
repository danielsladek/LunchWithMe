import React from 'react';
import { connect } from 'react-redux'

import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { DatePicker } from 'react-bootstrap-date-picker';

import {
    submitEvent, 
    fieldChange
}  from './actions';

import {
    getEventFormState,
    getValues,
} from './reducer';
  


export class AddEventForm extends React.Component {

    constructor(props) {
        
        super(props);

    }

    
    handleChange = (id, value) => {
        const { fieldChange } = this.props;
        fieldChange(id, value);
    }

    handleSubmit(event) {
        
        event.preventDefault();

        submitEvent(this.state);
    }

    render() {

        const {
            values,
            onChange,
            onSubmit,
        } = this.props;

        const {
            restaurant,
            date,
            time,
            description,
            lunchevent,
            invitations
        } = values;

        return (
            <Form onSubmit={ this.handleSubmit }>
                <FormGroup>
                    <Label for="restaurant">Restaurants:</Label>
                    <Input name="restaurant" id="restaurant" type="text" value={restaurant} onChange={onChange} />
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="date">Date:</Label>
                            <Input name="date" id="date" type="text" value={date} onChange={onChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="time">Time:</Label>
                            <Input name="time" id="time" type="text" value={time} onChange={onChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input name="description" type="textarea" id="description" value={description} onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lunchevent">Lunch event type:</Label>
                    <Input name="lunchevent" type="select" id="lunchevent" value={lunchevent} onChange={onChange} >
                        <option>Only for invited</option>
                        <option>Only for my friends</option>
                        <option>Public</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="invitations">Invitations:</Label>
                    <Input name="invitations" id="invitations" type="text" value={invitations} onChange={onChange} />
                </FormGroup>
                <Button color="primary" type="submit">Create a new lunch</Button>
            </Form>
        )
    }

}

const mapStateToProps = (storeState) => {
    const eventForm = getEventFormState(storeState);
    
      return {
        values: getValues(eventForm)
      };
};
  
const EventContainer = connect(mapStateToProps, {fieldChange, submitEvent})(AddEventForm);

export default EventContainer;