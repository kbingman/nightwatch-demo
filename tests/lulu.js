module.exports = {
  'Demo test Lululemon' : function (browser) {
    browser
      .url('http://www.lululemon.com')
      .waitForElementVisible('body', 1000)
      // .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('#x-root', 10000)
      .execute(function() {
        var mobify = window.Mobify;

        return false;
      }, [], function(result) {
        console.log(result)
      })
      .end();
  }
};
