'use strict';


angular.module('dota2sucksApp')
  .directive('roles', function () {
    return {
      restrict: 'E',
      scope: {
        f:'='
      },
      template:
          '<select ng-model="f">' +
            '<option value="">Role</option>' +
            '<option value="Carry">Carry</option>' +
            '<option value="Disabler">Disabler</option>' +
            '<option value="LaneSupport">Lane Support</option>' +
            '<option value="Initiator">Initiator</option>' +
            '<option value="Jungler">Jungler</option>' +
            '<option value="Support">Support</option>' +
            '<option value="Durable">Durable</option>' +
            '<option value="Nuker">Nuker</option>' +
            '<option value="Pusher">Pusher</option>' +
            '<option value="Escape">Escape</option>' +
          '</select>'

    };
  });

angular.module('dota2sucksApp')
  .directive('atk', function () {
    return {
      restrict: 'E',
      scope: {
        f:'='
      },
      template:
          '<select ng-model="f">' +
          '<option value="">Attack Type</option>' +
          '<option value="melee">Melee</option>' +
          '<option value="ranged">Ranged</option>' +
          '</select>'
    };
  });

angular.module('dota2sucksApp')
  .directive('role', function () {
    return {
      restrict: 'E',
      scope: {
        role: '@'
      }
    };
  });