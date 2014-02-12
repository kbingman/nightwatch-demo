Feature: Lululemon Mobified Site

Scenario: Lululemon home page

    When I open http://www.lululemon.com
    then it should be mobified
    and it should use the home template
    and it should make a screenshot

Scenario: Lululemon Lightened Up Pullover page

    When I open http://shop.lululemon.com/products/clothes-accessories/tops-long-sleeve/Lightened-Up-Pullover
    then it should be mobified
    and it should use the pdp template
    and it should make a screenshot
    and close the browser
