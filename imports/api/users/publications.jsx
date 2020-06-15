import { Meteor } from 'meteor/meteor';

Meteor.publish('users.all-usernames', function () {
    if (!this.userId) {
         this.ready();
    } else {
        return Meteor.users.find({}, {
            fields: {
                username:1,
            },
            limit: 100000,
            sort: { 
                username:1 
            },
        });
    }
});