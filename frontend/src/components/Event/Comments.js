/*global FB*/

import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';

export class Comments extends React.Component {

    componentDidUpdate() {
        if(FB !== 'undefined') {
            FB.XFBML.parse();
        }
    }

    render() {

        if(typeof(FB) !== 'undefined' && FB !== null) {
            console.log('-----CALL', FB);
        }

        const {id} = this.props;

        return (
            <Card>
                <CardBody>
                    <div className="fb-comments" data-href={ `http://localhost:3000/event/${id}` } data-numposts="5" key={id} ></div>
                </CardBody>
            </Card>
        );
    }

}