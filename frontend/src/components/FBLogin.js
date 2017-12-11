import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { browserHistory } from 'react-router';

export class FBLogin extends React.Component {

  render() {

    function responseFacebook(response) {
    
      if(response.status !== 'unknown') { 
        browserHistory.push("/feed");
      }
      
    }

    return (
        <FacebookLogin
        appId="510836695951686"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn btn-primary"
        icon=""
      />
    );
  }
}
