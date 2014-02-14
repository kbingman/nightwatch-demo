// Uses the browser.execute to run code within the client browser,
// access the Mobify object and test the template.

exports.command = function(template, callback) {
    var self = this;
    var start = new Date().getTime();

    // this.waitForCondition('return Mobify.evaluatedData', 1000, 2000, function callback(result) {
    //     var now = new Date().getTime();
    //     var msg = 'Page was Mobified after ' + (now - start) + ' milliseconds.';
    //     self.assertion(true, !!result, false, msg, true);
    // });
    // this.pause(2000);


    // this.timeouts({ ms: 4000, type: 'script' })
    // this.timeouts_async({ ms: 4000 })

    this.execute_async(
        function() {
            // gets the mobifiy evaluatedDate object
            var evaluatedData = Mobify.evaluatedData;
            return evaluatedData;
        },
        [],
        function(result) {
            var evaluatedData = result.value;
            var now = new Date().getTime();
            var msg = 'Page was Mobified after ' + (now - start) + ' milliseconds.';
            self.pause(2000);

            self.assert.ok(evaluatedData, "Why isn't my message showing")
        }
    );

    return this; // allows the command to be chained.
};
