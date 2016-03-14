var expect = require('chai').expect;
var entryCount = require('./../js/entry-count.js').entryCount;
var moment = require('moment');

describe("entryCount", function() {

  it("counts the number of words in an input entry", function() {
    expect(entryCount("We represent the lollipop guild")).to.equal(5);
  });
});
