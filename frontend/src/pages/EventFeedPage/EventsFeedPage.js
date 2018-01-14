import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventPanel } from '../../components/EventPanel/EventPanel'
import { Container, Row, Col } from 'reactstrap'
import { eventFeedFetch, fetchEventChanges } from './Actions'
import { getEventFeedState, getEvents } from './Reducer'
import { Link } from 'react-router'
import { format } from 'date-fns'

export class EventsFeedPage extends Component {
  //Reacti event - zde si dispatchneme pak sagu a ta nataha pres axios data
  componentDidMount() {
    //Spustim redux action a ta spusti sagu
    const { eventFeedFetch } = this.props
    eventFeedFetch()
  }

  render() {
    const { events } = this.props
    let eventDayDividePivot = 0
    //mutate sort events// it do not modify props
    events.sort((a, b) => {
      if (a.timeStart < b.timeStart) {
        return -1
      } else {
        return 1
      }
      return 0
    })

    return (
      <div className="feed-wrapper">
        <div className="day-separator">
          <span>Today</span>Going with <a href="#">Tomas</a> at 12:30 am
        </div>
        <Row className="eventsFeedPage">
          {(events.length &&
            events.map(event => {
              if (event) {
                let eventDate = event.timeStart.match(
                  /([0-9]){4}-([0-9]){2}-([0-9]{2})/
                )
                let date = new Date(eventDate[0])

                if (
                  date.getDay() !== eventDayDividePivot &&
                  eventDayDividePivot !== 0
                ) {
                  return (
                    <div className="w-100" key={event.id}>
                      <span key={event.id} className="eventfeed-newdate">
                        {format(date, 'DD. MM. YYYY')}
                      </span>
                      <EventPanel eventId={event.id} event={event} />
                    </div>
                  )
                }
                eventDayDividePivot = date.getDay()
                return (
                  <EventPanel eventId={event.id} event={event} key={event.id} />
                )
              }
            })) || (
            <h2>
              There are currently no events.{' '}
              <Link to="addEvent">Let's create one!</Link>
            </h2>
          )}
        </Row>
      </div>
    )
  }
}
const mapStateToProps = storeState => {
  // pouziju selecty definovany v reduceru. Je to hezci, kdyz si pak budem
  // upravovat model, odpadne spoustu problemu.
  const eventListState = getEventFeedState(storeState)
  return { events: getEvents(eventListState) }
}
export function mapDispatchToProps(dispatch) {
  return {
    eventFeedFetch: () => dispatch(eventFeedFetch()),
  }
}
// Connect  - obali comopnentu a udela z ni container, který má řístup do
// REDUXoveho Storu
const EventsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(
  EventsFeedPage
)
export default EventsFeedContainer
