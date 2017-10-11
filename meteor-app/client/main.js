import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import '../imports/startup/accounts-config.js';

angular.module('meteor-module', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);
