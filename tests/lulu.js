module.exports = {
  'Demo test Lululemon' : function (browser) {

    browser
      .url('http://www.lululemon.com')
      .waitForPageToBeMobified()
      .execute(function() {
        var evaluatedData = Mobify.evaluatedData;

        return evaluatedData;
      }, [], function(result) {
        var evaluatedData = result.value;
        browser
          .assert.equal(evaluatedData.bodyType, 'home')
      })
      .saveScreenshot('screenshots/lulu_' + new Date().getTime() + '.png')
      .end();
  }
};
