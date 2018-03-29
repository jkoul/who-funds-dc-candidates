'use strict';


angular.module('app')
  .factory('Race', function($http, assetPath) {
    return {
      get: function(){
        return $http.get(assetPath + '/api/race.json');
      }
    };
  });
