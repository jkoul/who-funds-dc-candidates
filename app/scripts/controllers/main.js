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
      candidates: mainData[1].data,
      campaigns: mainData[2].data,
      electionYears: $filter('electionYears')(mainData[0].data)
    };
  });
