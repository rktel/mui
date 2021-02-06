import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { Roles } from "meteor/alanning:roles";


Meteor.methods({
    'users.setInitUser': () => {
        if(Meteor.users.find().count() === 0){
          const initUser = Meteor.settings.initUser;
          const userId =  Accounts.createUser(initUser.account);

          if (Meteor.roleAssignment.find({ 'user._id': userId }).count() === 0) {

            initUser.roles.forEach(function (role) {
              Roles.createRole(role, {unlessExists: true});
            });
            Roles.addUsersToRoles(userId, initUser.roles);
          }
        }
    },
    'users.isAdmin': function(){
        return Roles.userIsInRole(this.userId, ['admin']);
    }
})