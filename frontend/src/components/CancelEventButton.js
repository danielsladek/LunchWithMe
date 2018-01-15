import React, { Component } from 'react'
import { Button} from 'reactstrap'

export class CancelEventButton extends Component {
  render() {
    const { onClick } = this.props

    return (
      <Button onClick={onClick} type="button" color="danger" size="sm">
        Cancel event
      </Button>
    )
  }
}
