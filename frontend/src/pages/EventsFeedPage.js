import React, { Component } from 'react';
import { EventPanel } from '../components/EventPanel';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Container, Row, Col, Button } from 'reactstrap';
import myLogo from '../lwm-logo.png';

export class EventsFeedPage extends Component {
  render() {

    // Sample events array
    var sampleEventsArray = [
      {
        maximumLunchBuddies: 3,
        eventId: 1,
        eventName: "Tradice, Andel",
        eventPlace: {
          name: "Tradice",
          location: "Anděl"
        },
        eventCreator: {
          id: 1,
          name: "Jakub",
          surname: "Kašpar"
        },
        eventDescription: "Today they have gorgeous duck with 8. Check the daily menu and let me know if you are going too. Here is the menu link: http://www.tradiceandel.cz/cz/denni-nabidka/.",
        eventDate: "1.1.2018 at 12:30pm",
        eventAttendees: [
          {
            id: 1,
            name: "John",
            surname: "Doe"
          },
          {
            id: 2,
            name: "Mary",
            surname: "Doe"
          },
          {
            id: 3,
            name: "Pete",
            surname: "Doe"
          }
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              name: "John Doe"
            },
            text: "That sounds great. I am looking forward to meeting you. :)",
            published: "2.1.2001"
          },
          {
            id: 2,
            author: {
              id: 2,
              name: "Marry"
            },
            text: "I am joining you too!",
            published: "3.1.2001"
          },
        ]
      },
      {
        maximumLunchBuddies: 3,
        eventId: 2,
        eventName: "Kozlovna, Holešovice",
        eventPlace: {
          name: "Kozlovna",
          location: "Holešovice"
        },
        eventCreator: {
          id: 1,
          name: "Marek",
          surname: "Nový"
        },
        eventDescription: "Today they have gorgeous duck with 8. Check the daily menu and let me know if you are going too. Here is the menu link: http://www.tradiceandel.cz/cz/denni-nabidka/.",
        eventDate: "1.1.2018 at 12:30pm",
        eventAttendees: [
          {
            id: 1,
            name: "John",
            surname: "Doe"
          },
          {
            id: 2,
            name: "Mary",
            surname: "Doe"
          },
          {
            id: 3,
            name: "Pete",
            surname: "Doe"
          }
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              name: "John Doe"
            },
            text: "That sounds great. I am looking forward to meeting you. :)",
            published: "2.1.2001"
          },
          {
            id: 2,
            author: {
              id: 2,
              name: "Marry"
            },
            text: "I am joining you too!",
            published: "3.1.2001"
          },
        ]
      },
      {
        maximumLunchBuddies: 3,
        eventId: 3,
        eventName: "Tradice, Andel",
        eventPlace: {
          name: "Tradice",
          location: "Anděl"
        },
        eventCreator: {
          id: 1,
          name: "Tomáš",
          surname: "Fenek"
        },
        eventDescription: "Today they have gorgeous duck with 8. Check the daily menu and let me know if you are going too. Here is the menu link: http://www.tradiceandel.cz/cz/denni-nabidka/.",
        eventDate: "1.1.2018 at 12:30pm",
        eventAttendees: [
          {
            id: 1,
            name: "John",
            surname: "Doe"
          },
          {
            id: 2,
            name: "Mary",
            surname: "Doe"
          },
          {
            id: 3,
            name: "Pete",
            surname: "Doe"
          }
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              name: "John Doe"
            },
            text: "That sounds great. I am looking forward to meeting you. :)",
            published: "2.1.2001"
          },
          {
            id: 2,
            author: {
              id: 2,
              name: "Marry"
            },
            text: "I am joining you too!",
            published: "3.1.2001"
          },
        ]
      }
    ];
    const { events } = this.props;

    return (


      <Container>
        <Row className="fake-nav">
          <Link to="feed">
          <div className="logo-wrap">
            <img width="200px" src={myLogo} alt="Logo"></img>
          </div>
          </Link>
          <div className="nav-btn">
            <Link to="addLunch">
              <Button color="primary" size="lg" type="submit">Create a new lunch</Button>
            </Link>
          </div>
        </Row>
        <Row>
          <Col md="10" sm="12">

            {sampleEventsArray.map((event, i) => (
              <EventPanel event={event} key={event.eventId} />
            ))}

          </Col>

          <Col md="2" sm="12">
            <div className="widget-box">
              <h3>Going to</h3>
            <p>You have not joined any lunch yet. =)</p>
            </div>
          </Col>

        </Row>
      </Container>
    );
  }
}
