import { Meteor } from 'meteor/meteor';
import Messages from '.';

Meteor.publish('messages.all', function () {
    if (!this.userId) {
         this.ready();
    } else {
        return Messages.find({}, {
            limit: 10000,
            sort: {
                createdAt : -1
            },
        });
    }
});