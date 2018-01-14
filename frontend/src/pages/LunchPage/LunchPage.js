import React from 'react'
import { LunchForm } from '../../components/LunchForm/LunchForm'
import { Container } from 'reactstrap'
import Api from '../../Api'

export class LunchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editEvent: null,
      isLoading: true,
    }
  }

  componentDidMount(props) {
    const isEdit = this.props.location.pathname.includes('edit')

    if (isEdit) {
      const api = new Api(),
        _this = this

      const getEventFromDb = api
        .getEventById(this.props.params.eventId)
        .then(function(res) {
          _this.setState({ editEvent: res, isLoading: false })
        })
    } else {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { editEvent, isLoading } = this.state

    return (
      <Container>
        {!isLoading && (
          <div className="form-wrapper">
            <div className="left" />
            <div className="right">
              <LunchForm editEvent={editEvent} />
            </div>
          </div>
        )}
      </Container>
    )
  }
}
