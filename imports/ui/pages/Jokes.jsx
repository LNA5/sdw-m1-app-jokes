import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';


import Button    from 'react-bootstrap/Button';

import { AiOutlineLogout } from 'react-icons/ai';


import './Jokes.css';

class Jokes extends Component {
    handleClick = () => {
        Meteor.logout();
            this.props.history.push('/');    
    }

    render() {
        return (
        <div>
            <h1 className="header">
               Bienvenue sur le générateur de blagues
               <Button className="logout" onClick={this.handleClick}>
                    <AiOutlineLogout></AiOutlineLogout>
                </Button>
            </h1>
            <ViewJoke />
            <ViewJokes />

        </div>
        );
    };
};

export default Jokes;