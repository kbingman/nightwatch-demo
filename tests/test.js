// The following code requires casper 1.1 after the following commit
// https://github.com/n1k0/casperjs/commit/2378537a716a492533a279b8e3bc560ae3deca5a
require('process')

var fs = require('fs');
var async = require('async');
var Yadda = require('../node_modules/yadda');

var Dictionary = Yadda.Dictionary;
var English = Yadda.localisation.English;

var parser = new Yadda.parsers.FeatureParser();
var library = require('./library').init();
var yadda = new Yadda.Yadda(library);
// Yadda.plugins.nightwatch(yadda);

module.exports = (function(){

    var features = new Yadda.FeatureFileSearch('features').list();

    var steps = features.reduce(function(initial, file){
        var feature = parser.parse(fs.read(file));

        // results is now an array of stats for each file
        initial[file] = function (browser) {
            browser
                .url('http://www.lululemon.com')
                .waitForPageToBeMobified()
                .end();
        }
        return initial;
    }, {});

    return steps;

})();
