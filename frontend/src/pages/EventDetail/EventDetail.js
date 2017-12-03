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



export class EventDetail extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        /*this.state = {
            event: {}
        };*/
    }

    componentDidMount() {
        console.log(this.state);
        this.getEvent();
    }
    
    getEvent() {
        axios.get('http://localhost:3001/events/' + this.props.params.eventId).then(
            (response) => this.setState({event: response.data})
        );
    }

    getWillAttend() {

        console.log(this.props);
        const { eventAttendees } = this.state.event.event,
              { userId } = this.props.userInfo;
    
        var willAttend = false;
    
        eventAttendees.find((attendant) => {
          const eventAttendance = attendant.Attendance.willAttend,
                attendantId = attendant.Attendance.UserId;
    
          if (attendantId === userId && typeof eventAttendance !== 'undefined' && eventAttendance !== null) {
            willAttend = eventAttendance;
          } else {
            willAttend = false;
          }
        });
    
        return willAttend;
      };

    render() {
        const { event } = this.props;
        const id = this.props.params.eventId;


        if(Object.keys(this.state.event).length !== 0) {
            
            const {
                id,
                maximumLunchBuddies,
                organizator,
                eventAttendees,
                comments,
                description,
                place,
              } = this.props.event,
                willAttend = this.getWillAttend(),
                { userInfo } = this.props;

            return (
                <Row className="eventPanel">
                    
                </Row>
            );
        } else {
        
            return (
                <Row className="eventDetailsPage"></Row>
            );
    
        }

    }

}

const mapStateToProps = (storeState, props) => {
    return {
      event: getEventById(storeState, props.eventId),
      userInfo: getUserInfo(storeState),
    };
  };
  
  export const EventDetailContainer = connect(
    mapStateToProps,
    {
      switchEventAttendance,
    },
  )(EventDetail);