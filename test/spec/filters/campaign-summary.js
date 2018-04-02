'use strict';

describe('Filter: campaignSummary', function () {

  // load the filter's module
  beforeEach(module('app'));

  // initialize a new instance of the filter before each test
  var campaignSummary;
  beforeEach(inject(function ($filter) {
    campaignSummary = $filter('campaignSummary');
  }));

  it('should return the input prefixed with "campaignSummary filter:"', function () {
    var text = 'angularjs';
    expect(campaignSummary(text)).toBe('campaignSummary filter: ' + text);
  });

});
