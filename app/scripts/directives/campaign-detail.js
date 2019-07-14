'use strict';

/**
 * @ngdoc directive
 * @name app.directive:campaignDetail
 * @description
 * # campaignDetail
 */
angular.module('app')
  .directive('campaignDetail', ['Contribution', '$filter', function (Contribution, $filter) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope) {
        if(!scope.campaign || !scope.campaign.id) {
          return;
        }

        // var race = $filter('filter')(scope.races, {id: scope.campaign.raceId}, true)[0] || null;
        // var contributionLimit = race.contributionLimit

        Contribution.get({'COMMITTEENAME': scope.campaign.committeeName})
        .then(function(contribs){
          // scope.contribs = contribs;
          scope.contribs = $filter('newContributions')(contribs);

          var totalRaised = function(contribsArray){
            var total = 0;
            angular.forEach(contribsArray, function(c) {
              total += c.amount;
            });
            return total;
          };

          var contribsCount = contribs.length;

          var dcContribs = $filter('filter')(scope.contribs, function(c){
            return c.addressId || c.ward;
          });

          var smallContribs = $filter('filter')(scope.contribs, function(c){
            return c.amount < 100;
          });

          var contribsAtMax = $filter('filter')(scope.contribs, function(c){
            return c.amount === scope.race.contributionLimit;
          });

          scope.summaryData = {
            contribsCount: contribsCount,
            totalRaised: totalRaised(scope.contribs),
            dcContribs: dcContribs.length,
            totalRaisedFromDc: totalRaised(dcContribs),
            smallContribs: smallContribs.length,
            contribsAtMax: contribsAtMax.length
          };
        });
      }
    };
  }]);
