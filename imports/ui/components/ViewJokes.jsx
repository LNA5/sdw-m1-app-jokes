import { Meteor } from  'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '/imports/api/messages';

import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import ViewMessage from '/imports/ui/components/ViewMessage';

class ViewJokes extends Component {
    renderMessages = () => {
        const renderedMessages = this.props.messages.map((message) => {
            return (
                <ViewMessage
                    message={message}
                    key={message._id}
                />                
            );
        });

        return renderedMessages;
    };

    render() {
        if (this.props.loading) {
            return (
            <p>Chargement...</p>
            );
        }

        return (
            <Container className="container">
                   {this.renderMessages()}      
            </Container>
        );
    };
};

export default withTracker(() => {
    const MessagesPublication = Meteor.subscribe('messages.all');
    const loading = !MessagesPublication.ready();
    const messages = Messages.find({}, { sort: {createdAt: -1 }}).fetch();

    return {
        loading,
        messages,
    }
})(ViewJokes);