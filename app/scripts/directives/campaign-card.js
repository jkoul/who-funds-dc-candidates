'use strict';

/**
 * @ngdoc directive
 * @name app.directive:campaignCard
 * @description
 * # campaignCard
 */
angular.module('app')
  .directive('campaignCard', function () {
    return {
      templateUrl: 'views/components/campaign-card.html',
      restrict: 'E',
      transclude: true
    };
  });
