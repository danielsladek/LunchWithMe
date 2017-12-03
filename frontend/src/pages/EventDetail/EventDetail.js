import React, { Component } from 'react';
import { EventPanel } from '../../components/EventPanel/EventPanel';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Api from '../../Api';


export class EventDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            event: {}
        };
    }

    componentDidMount() {
        this.getEvent();
    }
    
    getEvent() {
        axios.get('http://localhost:3001/events/' + this.props.params.eventId).then(
            (response) => this.setState({event: response.data})
        );
    }

    render() {
        const { event } = this.props;
        const id = this.props.params.eventId;

        if(Object.keys(this.state.event).length !== 0) {
            console.log(this.state.event.event);
            return (
                <Row className="eventDetailsPage">
                    <Col md="8" sm="12">
                        <EventPanel event={this.state.event.event} displayComments={true} key={this.state.event.event.eventId} />
                    </Col>
                </Row>
            );
        } else {
        
            return (
                <Row className="eventDetailsPage"></Row>
            );
    
        }

    }

}

export default withRouter(EventDetail)