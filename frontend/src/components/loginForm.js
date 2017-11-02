import React from 'react';

export class LoginForm extends React.Component {

    render() {

        return (
            <div className="login">
                <h1>Please sign in to your account</h1>
                <p>Don't have an account? <a>Create a new one</a></p>   
                <div class="form-group">
                    <label for="email">Your e-mail address:</label>
                    <input id="email" className="form-control" type="email" />
                </div>
                <div class="form-group">
                    <label for="password">Your password:</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">Log in</button>
            </div>
        )

    }

}
