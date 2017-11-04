import React, { Component } from 'react';
import { EventPanel } from '../../components/EventPanel';
import { Container, Row, Col } from 'reactstrap';

export class EventsFeedPage extends Component {
  
  componentDidMount() {
    const { startEventsFeedFetch } = this.props;
    startProductListFetch();
  }




  render() {

  
    const { events,isLoading,error } = this.props;

    return (
      <Container>
        <Row className="eventsFeedPage">
          <Col md="8" sm="12">
            {sampleEventsArray.map((event, i) => (
              <EventPanel event={event} key={event.eventId} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (storeState) => {
  const {events} = storeState;

  return events;


}