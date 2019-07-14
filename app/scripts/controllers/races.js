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

    $scope.showRaces = false;
    $scope.racesCtrl = {
      activeYear: $scope.main.electionYears.reduce(function(a,b){
        return Math.max(a,b);
      }),

      getSelectedText: function() {
        if(!$scope.racesCtrl.filterRaces) {
          return "Loading races...";
        }
        return (angular.equals($scope.racesCtrl.filterRaces, $scope.racesCtrl.activeRaces) ? "Showing all races" : "Showing " + $scope.racesCtrl.filterRaces.length + " of " + $scope.racesCtrl.activeRaces.length + " races");
      }
    };
      
  });
