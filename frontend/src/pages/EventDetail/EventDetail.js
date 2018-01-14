import React, { Component } from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import axios from 'axios'
import Api from '../../Api'
import { getEventById } from '../EventFeedPage/Reducer'
import { getUserInfo } from '../../components/FBLogin/Reducer'
import { connect } from 'react-redux'
import { LunchBuddyIcon } from '../../components/LunchBuddyIcon'
import { switchEventAttendance } from '../EventFeedPage/Actions'
import { getEvent, getEventState } from './Reducer'
import { EventFetch } from './Actions'

// Komponenty Eventu
import { Title } from '../../components/Event/Title'
import { Comments } from '../../components/Event/Comments'
import { EventLunchBuddiesList } from '../../components/EventLunchBuddiesList'
import Map from '../../components/Event/Map'
import { ImageUpload } from '../../components/Event/ImageUpload'
import { ImagePanel } from '../../components/Event/ImagePanel/ImagePanel'

export class EventDetail extends Component {
  constructor(props) {
    super(props)

    const { EventFetch } = this.props
    const { event } = this.props
    this.handleImageSubmit = this.handleImageSubmit.bind(this)

    EventFetch(this.props.params.eventId)
  }

  images = {}

  handleImageSubmit = function(e) {
    e.preventDefault()

    /*
        * Takhle se to dělat nemá, 
        * ale chtěl jsem si vyzkoušet querySelectory 
        */
    let reader = new FileReader()
    let file = e.currentTarget.parentNode.querySelector('.fileInput').files[0]

    reader.onloadend = () => {
      var binary_string = atob(reader.result.split(',')[1])
      var len = binary_string.length
      var bytes = new Uint8Array(len)
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i)
      }

      var blob = binary_string

      const api = new Api()
      const image = {
        blob: reader.result.split(',')[1],
        image: file,
        mimeType: file.type,
        name: null,
        userId: this.props.userInfo.userId,
        eventId: this.props.event.id,
      }

      api.insertImage(image).then(
        function() {
          let api = new Api()
          this.setState({ images: api.getImages(this.props.params.eventId) })
          console.log('zavolání funkce')
          this.forceUpdate()
        }.bind(this)
      )
    }

    reader.readAsDataURL(file)
  }

  componentWillMount() {
    let api = new Api()

    console.log('componentWillMount --- ')
    this.setState({ images: api.getImages(this.props.params.eventId) })
  }

  render() {
    console.log('OBNOVILO SE')
    const { event } = this.props
    const { eventAttendees } = this.props.event

    if (Object.keys(event).length !== 0) {
      return (
        <Row className="eventDetailsPage">
          <Col>
            <Card>
              <CardBody>
                <div className="organizatorPanel" />
                <div className="eventInfo">
                  <Title name={event.place.name} />

                  <div className="date">{event.timeStart}</div>
                </div>
                <div className="feed-event-buddies">
                  <div>with</div>
                  <EventLunchBuddiesList
                    eventAttendees={eventAttendees}
                    currentUser={this.props.userInfo}
                    organizator={event.organizator}
                  />
                </div>
                <div className="buttonPanel">
                  <form name="eventActions" />
                </div>
              </CardBody>
            </Card>
            <Card className="mt-4">
              <CardBody>
                <Map
                  isMarkerShown="false"
                  lat={parseInt(event.place.lat)}
                  lng={parseInt(event.place.lng)}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Comments id={event.id} />

            <Card className="mt-4">
              <CardBody>
                <ImagePanel images={this.state.images} />
              </CardBody>
            </Card>

            <Card className="mt-4">
              <CardBody>
                <ImageUpload handleSubmit={this.handleImageSubmit} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = storeState => {
  const eventState = getEventState(storeState)
  return {
    event: getEvent(eventState),
    userInfo: getUserInfo(storeState),
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    EventFetch: id => dispatch(EventFetch(id)),
  }
}

export const EventDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail)

export default EventDetailContainer
