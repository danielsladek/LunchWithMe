import React from 'react';
import { NewLunchForm } from '../components/newLunchForm';
import { Container } from 'reactstrap';


export class NewLunchPage extends React.Component {

    render() {

        return (
            <Container>
                <h1>Create a new lunch event</h1> 
                <NewLunchForm />
            </Container>
        )

    }

}