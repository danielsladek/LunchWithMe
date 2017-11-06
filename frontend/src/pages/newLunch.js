import React from 'react';
import { NewLunchForm } from '../components/newLunchForm';
import { Container } from 'reactstrap';
import { Row, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import myLogo from '../lwm-logo.png';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


export class NewLunchPage extends React.Component {

    render() {

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
                <NewLunchForm />
            </Container>
        )

    }

}
