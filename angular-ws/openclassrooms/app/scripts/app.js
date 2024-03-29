'use strict';

/**
 * @ngdoc overview
 * @name openclassroomsApp
 * @description
 * # openclassroomsApp
 *
 * Main module of the application.
 */
angular
  .module('openclassroomsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
