import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { getUserInfo } from './FBLogin/Reducer';

export class CancelEventButton extends Component {

  render() {
    const { onClick } = this.props;

    return (
      <Button onClick={onClick} type="button" color="danger" size="lg">
        Cancel event
      </Button>
    );
  }
}
