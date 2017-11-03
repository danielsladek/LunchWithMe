import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class RegisterForm extends React.Component {

    render() {

        return (
            <Form>
                <FormGroup>
                    <Label for="email">Your e-mail address:</Label>
                    <Input id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Your password:</Label>
                    <Input id="password" type="password" />
                </FormGroup>
                <Button color="primary" type="submit">Create a new account</Button>
            </Form>
        )

    }

}