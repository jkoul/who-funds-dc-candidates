'use strict';


angular.module('app')
  .factory('Candidate', function($http, assetPath) {
    return {
      get: function(){
        return $http.get(assetPath + '/api/candidate.json');
      }
    };
  });
