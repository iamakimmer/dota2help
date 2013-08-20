'use strict';


angular.module('dota2sucksApp')
  .directive('hero', function () {
    return {
      restrict: 'E',
      scope: {
        name: '@',
        imagesrc: '@',
        atk: '@',
        abilities: '=',
        roles: '=',
        remove: '&'
      },
      templateUrl: '/views/partials/hero.html'
    };
  });