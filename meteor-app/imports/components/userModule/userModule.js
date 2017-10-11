import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import { Users } from '../../api/users.js';
import template from './userModule.html';

class UserCtrl {
  constructor($scope) {
      $scope.viewModel(this);
      this.subscribe('userList');

      this.newUser = {};
      this.Arr = [];
      this.helpers({
        users() {
          return Users.find();
        },
        currentUser() {
          return Meteor.user();
        }
      })
  }

  loggedInUser(idUser) {
    console.log(idUser);
    return (idUser._id === Meteor.userId()) ? idUser._logged = true : idUser._logged = false;
  }

  createUser(newUser) {
    console.log(newUser);
    Meteor.call('users.insert', newUser);
  }
}


export default angular.module('userModule', [
  angularMeteor
])
  .component('userModule', {
    templateUrl: 'imports/components/userModule/userModule.html',
    controller: ['$scope', UserCtrl]
  })
