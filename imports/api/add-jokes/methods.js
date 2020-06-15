import { Meteor } from 'meteor/meteor';
import Messages from '.';

Meteor.methods({
    'messages.create': function({ content }) {
        if (!this.userId) {
            throw new Meteor.Error('403', 'Vous devez être connectés');
        }

        Messages.insert({
            userId: this.userId,
            content,
            createdAt: new Date(),
        });

        console.log("message enregistré");
    },
});