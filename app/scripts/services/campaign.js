'use strict';


angular.module('app')
  .factory('Campaign', function($http, assetPath) {
    return {
      get: function(){
        return $http.get(assetPath + '/api/campaigns.json');
      }
    };
  });
