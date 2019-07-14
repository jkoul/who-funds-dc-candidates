'use strict';

angular.module('app')
.directive('activeRaces', function($filter){
  return {
    restrict: 'A',
    scope: true,

    link: function(scope){
      if(!scope.racesCtrl.activeYear) {
        return;
      }

      var getActiveRaces = function(activeYear){
        return $filter('filter')(scope.main.races, {electionYear:activeYear});
      };

      scope.racesCtrl.activeRaces = getActiveRaces(scope.racesCtrl.activeYear);

      var getFilterRaces = function(races) {
        return angular.copy(races);
      };
      
      // scope.racesCtrl.filterRaces = angular.copy(scope.racesCtrl.activeRaces);

      // var yearRaces = getActiveRaces(scope.summary.activeYear);

      var resetActiveRaces = function(year) {
        scope.racesCtrl.activeRaces = getActiveRaces(year);
        scope.racesCtrl.filterRaces = getFilterRaces(scope.racesCtrl.activeRaces);
      };

      
      scope.$watch('racesCtrl.activeYear', function(year) {
        resetActiveRaces(year);
        // scope.activeRaces = getActiveRaces(year);
      });
    }
  };
});