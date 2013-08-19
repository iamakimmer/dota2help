'use strict';


angular.module('dota2sucksApp')
  .directive('hero', function () {
    return {
      restrict: 'E',
      scope: {
        name: "@",
        imagesrc:  "@",
        abilities: "="
      },
      templateUrl: '/views/partials/hero.html'
    };
  });