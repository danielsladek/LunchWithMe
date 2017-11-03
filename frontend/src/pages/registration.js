import React from 'react';
import { RegisterForm } from 'reactstrap';

export class RegistrationPage extends React.Component {

    render() {

        return (
            <div className="register">
                <h1>Create a new account</h1>
                <p>Already have and account? <a>Log in</a></p> 
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
            </div>
        )

    }

}