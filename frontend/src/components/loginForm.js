import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export class LoginForm extends React.Component {

    render() {

        return (
            <Form> 
                <FormGroup>
                    <Label for="email">Your e-mail address:</Label>
                    <Input id="email" type="email" />
                </FormGroup>
                <FromGroup>
                    <Label for="password">Your password:</Label>
                    <Input id="password" type="password" />
                </FromGroup>
                <Button>Log in</Button>
            </Form>
        )

    }

}
