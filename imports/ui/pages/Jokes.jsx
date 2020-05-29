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
               Hello
            </h1>

        </div>
        );
    };
};

export default Jokes;