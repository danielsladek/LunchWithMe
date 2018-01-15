import React, { Component } from 'react'
import { Button } from 'reactstrap'

export class EditEventButton extends Component {
  render() {
    const { onClick } = this.props

    return (
      <Button onClick={onClick} type="button" color="primary" size="sm">
        Edit
      </Button>
    )
  }
}
