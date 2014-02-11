var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;

module.exports.init = function() {
    var dictionary = new Dictionary();
        // .define('LOCALE', /(fr|es|ie|de)/)
        // .define('NUM', /(\d+)/);

    var library = English.library()

    .when("I open $URL", function(url) {
        console.log(url);
    })

    .then("the title should be '$TITLE'", function(title) {
        console.log(title);
    })

    // .then("the $ACTION form exists", function(action) {
    //     casper.test.assertExists('form[action="/' + action + '"]', 'form is found');
    // })

    // .when("I search for $TERM", function(term) {
    //     casper.fill('form[action="/search"]', { q: term }, true);
    // })

    // .then("the search for $TERM was made", function(term) {
    //     var regex = new RegExp('q=' + term)
    //     casper.test.assertUrlMatch(regex, 'search term has been submitted');
    // })

    // .then("$NUM or more results were returned", function(number) {
    //     casper.test.assertEval(function(number) {
    //         return __utils__.findAll('h3.r').length >= number;
    //     }, 'google search retrieves ' + number + ' or more results', [number]);
    // });

    return library;
};
