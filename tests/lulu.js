module.exports = {
  'Demo test Lululemon' : function (browser) {
    browser
      .url('http://www.lululemon.com')
      .waitForElementVisible('body', 20000)
      .waitForElementVisible('#x-root', 30000)
      .execute(function() {
          var evaluatedData = Mobify.evaluatedData;

          return evaluatedData;
      }, [], function(result) {
        console.log('result', result.value.bodySubtype)
      })
      .end();
  }
};
