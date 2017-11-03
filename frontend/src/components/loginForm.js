import React from 'react';

export class LoginForm extends React.Component {

    render() {

        return (
            <div className="login">
                <h1>Please sign in to your account</h1>
                <p>Don't have an account? <a>Create a new one</a></p>   
                <div className="form-group">
                    <label htmlFor="email">Your e-mail address:</label>
                    <input id="email" className="form-control" type="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Your password:</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">Log in</button>
            </div>
        )

    }

}
