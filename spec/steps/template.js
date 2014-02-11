var assert = require('assert');
var English = require('yadda').localisation.English;

module.exports = (function() {
  return English.library()
    .given("the $URL page", function(url, next) {

       next();
    })
    .when("I navigate to $PATH", function(path, next) {

       next();
    })
    .then("it should have the $TEMPLATE template", function(expectedTemplate, next) {
       assert.equal(template, expectedTemplate);
       next();
    });
})();
