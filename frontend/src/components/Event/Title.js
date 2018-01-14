import React from 'react'

export class Title extends React.Component {
  render() {
    return <h2 className="eventTitle">{this.props.name}</h2>
  }
}
