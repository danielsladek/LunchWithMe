import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { userLogin } from "./Actions";
import { getUserInfo } from "./Reducer";
import { Redirect } from "react-router-dom";

export class FBLoginContainer extends Component {

  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    if (response.status !== 'unknown') {
      const userLogin = this.props.userLogin(response);
    } else {
      return <p>Login failed</p>;
    }
  }

  render(props) {
    return (
      <FacebookLogin
        appId="510836695951686"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="btn btn-primary"
        icon=""
      />
    );
  }
}

const mapStateToProps = (storeState, props) => {
  return {userInfo: getUserInfo(storeState)};
};

export const FBLogin = connect(
  mapStateToProps,
  {
    userLogin,
  },
)(FBLoginContainer);
