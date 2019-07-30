'use strict';

angular.module('app')
  .filter('dcContributions', function($filter) {
    return function(contribs) {
      if(!contribs || !contribs.length) {
        return;
      }

      return $filter('filter')(contribs, function(c){
        return c.addressId || c.ward;
      });
    };
  });