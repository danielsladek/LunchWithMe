import React from 'react';
import { NewLunchForm } from '../components/newLunchForm';
import { Container } from 'reactstrap';


export class NewLunchPage extends React.Component {

    render() {

        return (
            <Container>
                <div className="form-wrapper">
                  <div className="left">

                  </div>
                  <div className="right">
                    <NewLunchForm />
                  </div>
                </div>
            </Container>
        )

    }

}
