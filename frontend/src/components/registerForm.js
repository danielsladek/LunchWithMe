import React from 'react';

export class RegisterForm extends React.Component {

    render() {

        return (
            <div className="register">
                <h1>Create a new account</h1>
                <p>Already have and account? <a>Log in</a></p>   
                <div class="form-group">
                    <label for="email">Your e-mail address:</label>
                    <input id="email" className="form-control" type="email" />
                </div>
                <div class="form-group">
                    <label for="password">Your password:</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">Create a new account</button>
            </div>
        )

    }

}