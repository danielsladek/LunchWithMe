/*global FB*/

import React from "react";
import { Card, CardBody } from "reactstrap";
import FacebookProvider, { Comments as FBComments } from "react-facebook";

export class Comments extends React.Component {
    componentDidUpdate() {
        if (FB !== "undefined") {
            FB.XFBML.parse();
        }
    }

    render() {
        if (typeof FB !== "undefined" && FB !== null) {
            console.log("-----CALL", FB);
        }

        const { id } = this.props;

        return (
            <Card>
                <CardBody>
                    <FacebookProvider appId="510836695951686">
                        <FBComments href={ `http://localhost:3000/event/${id}` } />
                    </FacebookProvider>
                </CardBody>
            </Card>
        );
    }
}
