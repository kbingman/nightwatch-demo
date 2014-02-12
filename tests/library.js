var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;

module.exports.init = function() {

    var dictionary = new Dictionary();
        // .define('LOCALE', /(fr|es|ie|de)/)
        // .define('NUM', /(\d+)/);

    var library = English.library()

    .when("I open $URL", function(url) {
        this.browser.url(url)
    })

    .then("it should be mobified", function() {
        // Uses the custom waitForPageToBeMobified command to wait until
        // the DOM has been successfully mobified
        this.browser.waitForPageToBeMobified()
    })

    .then("it should use the $TEMPLATE template", function(template) {
        // Uses the browser.execute to run code within the client browser,
        // access the Mobify object and test the template.
        // We should write a custom command for it.
        var browser = this.browser;
        browser.execute(function() {
            var evaluatedData = Mobify.evaluatedData;

            return evaluatedData;
        }, [], function(result) {
            var evaluatedData = result.value;
            browser
              .assert.equal(evaluatedData.bodyType, template, 'template is correct');
        })
    })

    .then("it should make a screenshot", function() {
        var filename = 'lulu_' + new Date().getTime() + '.png';
        this.browser.saveScreenshot('screenshots/' + filename);
    })

    .then("close the browser", function() {
        this.browser.end();
    })

    return library;
};
