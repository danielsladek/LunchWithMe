import React, { Component } from 'react';
import { EventPanel } from '../../components/EventPanel/EventPanel';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Api from '../../Api';
import { getEventById } from "../EventFeedPage/Reducer";
import { getUserInfo } from "../../components/FBLogin/Reducer";
import { connect } from 'react-redux';
import { LunchBuddyIcon } from "../../components/LunchBuddyIcon";
import { switchEventAttendance } from "../EventFeedPage/Actions";
import { getEvent, getEventState } from './Reducer'
import { EventFetch } from './Actions'

export class EventDetail extends Component {



    componentDidMount() {
        console.log("->>>>>>> STATE", this.props);
        const {EventFetch} = this.props;
        EventFetch(this.props.params.eventId);
        
    }

    getEvent() {
        // axios.get('http://localhost:3001/events/' + this.props.params.eventId).then(
        //     (response) => this.setState({event: response.data})
        // );
    }


    render() {
        const { event } = this.props;
        const { id } = this.props;





        return (
            <Row className="eventDetailsPage"></Row>
        );



    }

}


const mapStateToProps = storeState => {
    // pouziju selecty definovany v reduceru. Je to hezci, kdyz si pak budem
    // upravovat model, odpadne spoustu problemu.
    const eventState = getEventState(storeState);
    return { event: getEvent(eventState) };

};


export function mapDispatchToProps(dispatch) {
    return {
        EventFetch: (id) => dispatch(EventFetch(id)),
    };
}




export const EventDetailContainer = connect(
    mapStateToProps,
   mapDispatchToProps
)(EventDetail);


export default EventDetailContainer;