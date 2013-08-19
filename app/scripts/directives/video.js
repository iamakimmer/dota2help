'use strict';


angular.module('dota2sucksApp')
  .directive('videopopup', function () {
    return {
      restrict: 'A',
      link : function(scope, element, attr) {
        var i = 0;
        element.tooltip();
        $(element).bind('click', function(e) {
          console.log(attr);
          console.log(attr.videopopup);
          element.tooltip('show');
        });
      }
    };
  });