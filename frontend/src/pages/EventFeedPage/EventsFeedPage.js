import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EventPanel} from '../../components/EventPanel';
import {Container, Row, Col} from 'reactstrap';
import {eventsFeedFetch} from './actions'
import {getEventFeedState, getEvents} from './reducer'

export class EventsFeedPage extends Component {

  //Reacti event - zde si dispatchneme pak sagu a ta nataha pres axios data
  componentDidMount() {
    const {eventsFeedFetch} = this.props;
  }

  render() {

    const {events, isLoading, error} = this.props;

    return (
      <Container>
        <Row className="eventsFeedPage">
          <Col md="8" sm="12">
            {events.map((event) => <EventPanel event={event} key={event.id}/>)}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (storeState) => {
  //pouziju selecty definovany v reduceru. Je to hezci, kdyz si pak budem upravovat model, odpadne spoustu problemu.

  const eventListState = getEventFeedState(storeState);

  return {events: getEvents(eventListState)};

};

// Connect  - obali comopnentu a udela z ni container, který má řístup do
// REDUXoveho Storu
const EventsFeedContainer = connect(mapStateToProps, {})(EventsFeedPage);

export default EventsFeedContainer;