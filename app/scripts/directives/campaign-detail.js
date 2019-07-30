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
      link: function(scope) {
        if(!scope.campaign || !scope.campaign.id) {
          console.log('no campaign');
          return;
        }

        Contribution.get({'COMMITTEENAME': scope.campaign.committeeName})
        .then(function(contribs){
          scope.contribs = $filter('newContributions')(contribs);

          var contribsAtMax = $filter('filter')(scope.contribs, function(c){
            return c.amount === scope.race.contributionLimit;
          });

          var candidateContributions = $filter('filter')(scope.contribs, function(c) {
            return (c.contributorName === scope.campaign.autoCandidateName || c.contributorType === "Candidate");
          }, true);

          var contribsByContributor = $filter('groupBy')(contribs, 'contributorName');
          
          var campaignContributors = [];
          angular.forEach(contribsByContributor, function(contributions, contributorName){
            var isDc = $filter('dcContributions')(contributions).length ? true : false;
            campaignContributors.push({name: contributorName, totalRaised: $filter('totalRaised')(contributions), dcResident: isDc, contributions: contributions});
          });

          var maxDonors = $filter('filter')(campaignContributors, function(c){
            return c.totalRaised === scope.race.contributionLimit;
          });

          var smallContribs = $filter('filter')(campaignContributors, function(c){
            return c.totalRaised < 100;
          });

          scope.summaryData = {
            contribs: contribs,
            smallContribs: smallContribs,
            contribsAtMax: contribsAtMax.length,
            candidateContribs: candidateContributions,
            contributors: campaignContributors,
            maxDonors: maxDonors
          };
        });
      }
    };
  }]);
