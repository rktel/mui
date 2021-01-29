import { Meteor } from "meteor/meteor";

import "../imports/api/users";

Meteor.startup(()=>{
    Meteor.call('users.createUser');
})