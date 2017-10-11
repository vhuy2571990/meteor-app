import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import userModule from '../imports/components/userModule/userModule';
import '../imports/startup/accounts-config.js';

angular.module('meteor-module', [
  angularMeteor,
  todosList.name,
  userModule.name,
  'accounts.ui'
]);
