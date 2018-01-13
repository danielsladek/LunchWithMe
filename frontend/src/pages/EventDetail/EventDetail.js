import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import axios from 'axios'
import Api from '../../Api';
import { getEventById } from "../EventFeedPage/Reducer";
import { getUserInfo } from "../../components/FBLogin/Reducer";
import { connect } from 'react-redux';
import { LunchBuddyIcon } from "../../components/LunchBuddyIcon";
import { switchEventAttendance } from "../EventFeedPage/Actions";
import { getEvent, getEventState } from './Reducer'
import { EventFetch } from './Actions'

// Komponenty Eventu
import { Title } from '../../components/Event/Title';
import { Comments } from '../../components/Event/Comments';
import { EventLunchBuddiesList } from '../../components/EventLunchBuddiesList';
import Map  from '../../components/Event/Map';
import { ImageUpload } from '../../components/Event/ImageUpload';
import { ImagePanel } from '../../components/Event/ImagePanel/ImagePanel';



export class EventDetail extends Component {

    constructor(props) {
        super(props);

        const {EventFetch} = this.props;
        const { event } = this.props;

        EventFetch(this.props.params.eventId);
    }
    
    images = {};

    handleImageSubmit = function (e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
/*        Api.insertImage(image);
        this.images = () => Api.getImages(event.id);
        */
    }

    componentWillMount() {
        let api = new Api();
        this.images = api.getImages(this.props.params.eventId);
    }

    render() {
        const { event } = this.props;
        const { eventAttendees } = this.props.event;

        if(Object.keys(event).length !== 0) {

        return (
            <Row className="eventDetailsPage">
                <Col>
                    <Card>
                        <CardBody>
                        <div className="organizatorPanel">

                        </div>
                        <div className="eventInfo">

                            <Title name={event.place.name} />

                            <div className="date">
                                {event.timeStart}
                            </div>

                        </div>
                        <div className="feed-event-buddies">
                        <div>with</div>
                        <EventLunchBuddiesList eventAttendees={eventAttendees} currentUser={this.props.userInfo} organizator={event.organizator} />
                        </div>
                        <div className="buttonPanel">

                            <form name="eventActions">
                            </form>

                        </div>
                        </CardBody>
                    </Card>
                    <Card className="mt-4">
                        <CardBody>
                        <Map isMarkerShown="false" lat={parseInt(event.place.lat)} lng={parseInt(event.place.lng)} />
                        </CardBody>
                    </Card>
                </Col>  
                <Col>
                    <Comments id={event.id}/>

                    <Card className="mt-4">
                        <CardBody>
                            <ImagePanel images={this.images}/>
                        </CardBody>
                    </Card>

                    <Card className="mt-4">
                        <CardBody>
                            <ImageUpload handleSubmit={this.handleImageSubmit} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );

        } else {
            return (
                <div></div>
            );
        }
    }

}


const mapStateToProps = storeState => {
    const eventState = getEventState(storeState);
    return { 
        event: getEvent(eventState),
        userInfo: getUserInfo(storeState)
    };
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