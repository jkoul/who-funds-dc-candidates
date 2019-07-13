'use strict';

angular.module('app')
  .filter('electionYears', function($filter) {
    return function(races) {
      if(!races || !races.length) {
        return false;
      }

      var years = [];
    
      angular.forEach(races, function(race){

        if(years.indexOf(race.electionYear) === -1) {
          years.push(race.electionYear);
        }

      });

      return $filter('orderBy')(years);

    };

  });