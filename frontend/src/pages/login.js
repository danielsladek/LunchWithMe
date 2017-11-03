import React from 'react';
import { LoginForm } from '../components/loginForm';


export class LoginForm extends React.Component {

    render() {

        return (
            <div className="login">
                <h1>Please sign in to your account</h1>
                <p>Don't have an account? <a>Create a new one</a></p>  
                <LoginForm />
            </div>
        )

    }

}
