'use strict';

describe('Directive: campaignCard', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<campaign-card></campaign-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the campaignCard directive');
  }));
});
