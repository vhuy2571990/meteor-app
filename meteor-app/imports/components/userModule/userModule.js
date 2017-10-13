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
      this.currentUserId = Meteor.userId();
      this.helpers({
        users() {
          this.Arr = [];
          Users.find().map(v => {
            if(Meteor.userId() == v._id) {
              v._logged = true;
            }
            this.Arr.push(v);
          });
        },
        currentUser() {
          return Meteor.user();
        }
      })
  }

  createUser(newUser) {
    Meteor.call('users.insert', newUser);
    this.newUser = {};
  }
}


export default angular.module('userModule', [
  angularMeteor
])
  .component('userModule', {
    templateUrl: 'imports/components/userModule/userModule.html',
    controller: ['$scope', UserCtrl]
  })
