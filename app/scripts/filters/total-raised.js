'use strict';

angular.module('app')
  .filter('totalRaised', function(){
    return function(contribs){
      if(!contribs) {
        return;
      }

      var total = 0;
      angular.forEach(contribs, function(c) {
        total += c.amount;
      });
      return total;
    };
  });