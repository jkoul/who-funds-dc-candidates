'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', function ($scope, $filter, mainData) {
    $scope.main = {
      races: mainData[0].data,
      campaigns: mainData[1].data,
      electionYears: $filter('electionYears')(mainData[0].data)
    };
  });
