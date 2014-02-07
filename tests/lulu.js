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
        browser
          .assert.equal(result.value.bodySubtype, 'women')
          .assert.equal('foo', 'foo');
      })
      .saveScreenshot('screenshots/lulu.png')
      .end();
  }
};
