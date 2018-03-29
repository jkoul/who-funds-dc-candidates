'use strict';

/**
 * @ngdoc filter
 * @name app.filter:candidateName
 * @function
 * @description
 * # candidateName
 * Filter in the app.
 */
angular.module('app')
  .filter('candidateName', function ($filter) {
    return function (campaigns, candidates) {

      var getCandidateName = function(campaign) {
        if(campaign.candidateId) {
          var matchCandidates = $filter('filter')(candidates, {id: campaign.candidateId}, true);
          if(matchCandidates.length === 1) {
            return matchCandidates[0].name;
          } else {
            return 'Unnamed Candidate';
          }
        } else {
          return campaign.committeeName;
        }
      };

      if(campaigns && campaigns.length) {
        angular.forEach(campaigns, function(campaign) {
          return angular.extend(campaign, {candidateName: getCandidateName(campaign)});
        });

        return campaigns;
      }
    };
  });
