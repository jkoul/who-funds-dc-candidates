'use strict';

/**
 * @ngdoc directive
 * @name app.directive:campaignDetail
 * @description
 * # campaignDetail
 */
angular.module('app')
  .directive('campaignDetail', ['Contribution', function (Contribution) {
    return {
      restrict: 'E',
      scope: true,
      link: function(scope) {
        if(!scope.campaign || !scope.campaign.id) {
          return;
        }
        // console.log(scope.campaign);
        // console.log(Contribution)
        Contribution.get({'COMMITTEENAME': scope.campaign.committeeName})
        .then(function(contribs){
          scope.contribs = contribs.data.features;
        });
      }
    };
  }]);
