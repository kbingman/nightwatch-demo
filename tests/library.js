var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;

module.exports.init = function() {

    var dictionary = new Dictionary();
        // .define('LOCALE', /(fr|es|ie|de)/)
        // .define('NUM', /(\d+)/);

    var library = English.library()

    // Opens a given URL in the nightwatch browser
    //
    .when("I open $URL", function(url) {
        this.browser.open(url)
    })

    // Waits until the Mobfiy.evalutatedData object is present
    //
    .then("it should be mobified", function() {
        // Uses the custom waitForPageToBeMobified command to wait until
        // the DOM has been successfully mobified
        this.browser.waitForPageToBeMobified()
    })

    // Uses the browser.execute to run code within the client browser,
    // access the Mobify object and test the template.
    //
    .then("it should use the $TEMPLATE template", function(template) {
        this.browser.assertMobifyTemplateIs(template);
    })

    // Waits for the correct element, then test for the text
    //
    .then("the title should be $TITLE", function(title){
        this.browser
            .waitForElementPresent('.x-pdp-title h1 div', 10000)
            .getText('.x-pdp-title h1 div', function(result) {
                this.assert.equal(result.value, title);
            });
    })

    // Makes a screenshot and saves it with a given title and timestamp
    //
    .then("it should make a screenshot titled $TITLE", function(title) {
        var filename = title + '.png';
        this.browser.saveScreenshot('screenshots/' + filename);
    })

    // Closes the browser
    //
    .then("close the browser", function() {
        this.browser.end();
    })

    // Pauses for the give amount of seconds
    //
    .then("wait $SECONDS seconds", function(seconds){
        this.browser.pause(seconds * 1000)
    })

    return library;
};
