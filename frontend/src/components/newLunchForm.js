import React from 'react';

export class NewLunchForm extends React.Component {

    render() {

        return (
            <div className="newLunch">
                <h1>Create a new lunch event</h1> 
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input id="name" className="form-control" type="text" />
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="date">Date:</label>
                            <input id="date" type="text" className="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="time">Time:</label>
                            <input id="time" type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="description" className="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="lunchevent">Lunch event type:</label>
                    <select id="lunchevent" className="form-control">
                        <option>Only for invited</option>
                        <option>Only for my friends</option>
                        <option>Public</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="invitations">Invitations:</label>
                    <input id="invitations" className="form-control" type="text"/>
                </div>
                <button className="btn btn-primary" type="submit">Create a new lunch</button>
            </div>
        )

    }

}