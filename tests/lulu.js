module.exports = {
  'Demo test Lululemon' : function (browser) {
    browser
      .url('http://www.lululemon.com')
      .waitForElementVisible('body', 20000)
      .waitForElementVisible('#x-root', 20000)
      .execute(function() {
        var evaluatedData = Mobify.evaluatedData;

        return evaluatedData;
      }, [], function(result) {
        var evaluatedData = result.value;
        browser
          .assert.equal(evaluatedData.bodyType, 'home')
          .assert.equal('foo', 'foo')
          .saveScreenshot('screenshots/lulu.png');
      })
      .end();
  }
};
