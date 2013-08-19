'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dota2sucksApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope ', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should attach a new item of awesomeThings to the scope ', function () {
    scope.addItem('item 1');
    scope.addItem('item 2');
    expect(scope.awesomeThings.length).toBe(5);
  });

  it('should remove a list of awesomeThings to the scope ', function () {
    scope.addItem('item 1');
    scope.removeItem('item 1');
    expect(scope.awesomeThings.length).toBe(3);
  });
});
