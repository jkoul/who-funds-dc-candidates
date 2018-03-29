'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])

  .constant('assetPath', '.')

  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
