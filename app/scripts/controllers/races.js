'use strict';

/**
 * @ngdoc function
 * @name app.controller:RacesCtrl
 * @description
 * # RacesCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('RacesCtrl', function ($scope, $filter) {
    $scope.campaigns = $filter('candidateName')($scope.main.campaigns, $scope.main.candidates);

    $scope.electionYears = $filter('electionYears')($scope.main.races);

    $scope.activeYear = 2018;

    $scope.showRaces = false;

    $scope.activeRaces = $filter('filter')($scope.main.races, {electionYear:$scope.activeYear});

  });
