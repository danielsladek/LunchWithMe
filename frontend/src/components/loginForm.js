import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export class LoginForm extends React.Component {

    render() {

        return (
            <div className="login">
                <h1>Please sign in to your account</h1>
                <p>Don't have an account? <a>Create a new one</a></p>  
                <Form> 
                    <FormGroup>
                        <Label for="email">Your e-mail address:</Label>
                        <Input id="email" type="email" />
                    </FormGroup>
                    <FromGroup>
                        <Label for="password">Your password:</Label>
                        <Input id="password" type="password" />
                    </FromGroup>
                </Form>
                <Button>Log in</Button>
            </div>
        )

    }

}
