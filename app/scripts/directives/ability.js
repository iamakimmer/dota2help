'use strict';

angular.module('dota2sucksApp')
  .directive('ability', function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        //deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
        //gotta be false or it will become a route change
        $(elem).prettyPhoto({
          deeplinking: false
        });
      };
    };
  });