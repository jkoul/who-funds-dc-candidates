'use strict';

/**
 * @ngdoc filter
 * @name app.filter:contributionSummary
 * @function
 * @description
 * # campaignSummary
 * Filter in the app.
 */
angular.module('app')
  .filter('newContributions', function ($filter) {
    return function (contribs) {
      // console.log(contribs);
      return $filter('filter')(contribs, function(c){
        return c.contributorType !== 'Committee';
      });
    };
  });
