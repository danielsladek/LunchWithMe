import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'reactstrap';


export class LoginForm extends React.Component {

    render() {

        function componentClicked() {
            console.log('Clicked');
        }
        
        function responseFacebook(response) {
            console.log(response);
        }

        return (
            <FacebookLogin
            appId="510836695951686"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        )

    }

}
