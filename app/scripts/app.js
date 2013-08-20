'use strict';

angular.module('dota2sucksApp', ['ngResource', 'ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/heroes', {
        templateUrl: 'views/heroes.html',
        controller: 'HeroesCtrl'
      })
      .when('/heroes/:x/:y', {
        templateUrl: 'views/heroes.html',
        controller: 'HeroesCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .otherwise({
        redirectTo: '/heroes'
      });
  });
