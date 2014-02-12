// Uses the browser.execute to run code within the client browser,
// access the Mobify object and test the template.

exports.command = function(template, callback) {
    var self = this;

    this.execute(
        function() {
            // gets the mobifiy evaluatedDate object
            var evaluatedData = Mobify.evaluatedData;

            return evaluatedData;
        },
        [],
        function(result) {
            var evaluatedData = result.value;
            self
              .assert.equal(evaluatedData.bodyType, template, 'template is ' + template);
        }
    );

    return this; // allows the command to be chained.
};
