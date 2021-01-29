import { Meteor } from "meteor/meteor";
import { Users } from './collection';

Meteor.methods({
    'users.getUser': (_username, _password) => {
        const user = Users.findOne({ username: _username, password: _password });
        return user;
    },
    'users.createUser': () => {
        const userCount = Users.find().count();
        if (userCount == 0) {
            Users.insert({ username: 'abel', password: 'chispa' });
            console.log('Usuario creado');
        }
    }
})