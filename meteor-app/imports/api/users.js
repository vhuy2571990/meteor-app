import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Users = Meteor.users;

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('userList', function tasksPublication() {
    return Meteor.users.find();
  });
}

Meteor.methods({
  'users.insert' (newUser) {
    console.log(newUser);
    return Accounts.createUser(newUser);
  }
});
