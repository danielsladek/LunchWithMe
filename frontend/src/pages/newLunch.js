import React from 'react';
import { NewLunchForm } from '../components/newLunchForm';


export class NewLunch extends React.Component {

    render() {

        return (
            <div className="newLunch">
                <h1>Create a new lunch event</h1> 
                <NewLunchForm />
            </div>
        )

    }

}