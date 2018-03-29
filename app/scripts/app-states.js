'use strict';

angular.module('app')
.config(function($stateProvider, $urlServiceProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/');
  // states to build
  // 1. main app state
  // 2. Search
  // 3. Search w/ filters
  // 4. Candidates
  // 5. Races
  // 6. Campaigns
  // 7. Campaign detail
    // - Aggregate statistics (and eventually dataviz)
    // - Scorecard scores
    // - List/table of contribs
  // About

  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        mainData: function(Race, Candidate, Campaign, $q){
          return $q.all([Race.get(), Candidate.get(), Campaign.get()]);
        }
      }
    })
    .state('main.home',{
      url: '/',
      templateUrl: 'views/pages/home.html',
      controller: 'HomeCtrl'
      // resolve: {
      //   home: function(SERVICES, $q){
      //     return $q.all(SERVICES())
      //   }
      // }
    })
    .state('main.races', {
      abstract: true,
      controller: 'RacesCtrl'
      // resolve: {
      //   raceData: function(Race, Campaign, $q){
      //     return $q.all([Race.get(), Campaign.get()]);
      //   }
      // }
    })

    .state('main.races.index', {
      url: '/races',
      templateUrl: 'views/pages/races.html'
    })
    //
    // .state('main.races.detail', {
    //   url: '/races/:params',
    //   templateUrl: 'racesviews/pages/races-detail.html'
    // })

    .state('main.campaigns', {
      abstract: true,
      controller: 'CampaignsCtrl'
    })

    .state('main.campaigns.index', {
      url: '/campaigns',
      templateUrl: 'views/pages/campaigns.html'
    });
});
