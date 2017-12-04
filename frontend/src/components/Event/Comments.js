import React from 'react';
import { CommentsCount } from './CommentsCount';
import { Card, CardBody } from 'reactstrap';

export class Comments extends React.Component {

    componentDidUpdate() {
        FB.XFBML.parse();
        console.log('didmount');
    }
    
    render() {
        return (
            <Card>
                <CardBody>
                    <div className="fb-comments" data-href="http://localhost:3000/event/1" data-numposts="5"></div>
                </CardBody>
            </Card>
        );
    }

}