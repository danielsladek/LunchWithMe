import React from 'react';
import { AddEventForm } from '../../components/AddEventForm/addEventForm';
import { Container } from 'reactstrap';


export class AddEventPage extends React.Component {

    render() {

        return (
            <Container>
                <h1>Create a new lunch event</h1> 
                <AddEventForm />
            </Container>
        )

    }

}
