import React from 'react';
import FacebookLogin from 'react-facebook-login';

export class FBLogin extends React.Component {

  render() {

    function responseFacebook(response) {
      console.log(response);
      
      if(response.status !== 'unknown') { 
        window.location.replace("/feed");
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
