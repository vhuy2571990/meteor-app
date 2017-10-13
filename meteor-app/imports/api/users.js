import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Users = Meteor.users;

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('userList', function tasksPublication() {
    return Users.find();
  });
}

Meteor.methods({
  'users.insert' (newUser) {
    Users.find().map(v => {
        if(v.username == newUser.username) {
          throw new Meteor.Error('Please choose different username');
        }else {
          return Accounts.createUser(newUser);
        }
    });
  }
});
